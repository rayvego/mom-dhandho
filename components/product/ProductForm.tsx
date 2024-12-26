"use client";

import { Card } from "@/components/ui/card";
import { newProductSchema } from "@/lib/formSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import NewProductInput from "../NewProductFormField";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormLabel, FormMessage } from "../ui/form";
import { cn } from "@/lib/utils";
import { ImagePlus, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UploadImage } from "./UploadImage";
import { Textarea } from "../ui/textarea";

interface ProductFormProps extends React.HTMLAttributes<HTMLDivElement> {}

// TODO: Make it so that when the cross button is pressed on the images, the image gets removed from AWS S3 as well
// TODO: Make the category a select input with functionality to add new immediately
// TODO: Similarly for tags

export function ProductForm({ className, ...props }: ProductFormProps) {
  const form = useForm<z.infer<typeof newProductSchema>>({
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      quantity: 1,
      images: [],
      sale: 0,
      category: "",
      tags: "",
      size: "M",
    },
  });

  const { watch, setValue } = form;
  const price = watch("price");
  const salePercentage = watch("sale");
  const mainImage = watch("images")[0];
  const additionalImages = watch("images").slice(1);

  const finalPrice = price - (price * salePercentage) / 100;

  const handleImageAdded = (imageUrl: string, index: number) => {
    const currentImages = form.getValues("images");
    const newImages = [...currentImages];
    newImages[index] = imageUrl;
    setValue("images", newImages);
  };

  const removeImage = (index: number) => {
    const currentImages = form.getValues("images");
    const newImages = currentImages.filter((_, i) => i !== index);
    setValue("images", newImages);
  };

  function onSubmit(values: z.infer<typeof newProductSchema>) {
    console.log(values);
  }

  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="flex space-x-4 p-4">
      <div className={cn("flex flex-col gap-4", className)} {...props}>
        <Card className="aspect-square h-[705px] w-[705px] flex items-center justify-center border-2 border-dashed relative">
          {mainImage ? (
            <div className="relative w-full h-full">
              <img src={mainImage} alt="Main product" className="w-full h-full object-cover" />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => removeImage(0)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <UploadImage onImageAdded={(url: string) => handleImageAdded(url, 0)} image={mainImage} />
          )}
        </Card>
        <div className="flex gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Card key={i} className="aspect-square h-32 w-32 relative">
              {additionalImages[i] ? (
                <div className="relative w-full h-full">
                  <img src={additionalImages[i]} alt={`Product ${i + 1}`} className="w-full h-full object-cover" />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-1 right-1 h-6 w-6"
                    onClick={() => removeImage(i + 1)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ) : (
                <UploadImage onImageAdded={(url: string) => handleImageAdded(url, i + 1)} image={additionalImages[i]} />
              )}
            </Card>
          ))}
        </div>
      </div>
      <Card className="p-6 w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <NewProductInput control={form.control} name="name" placeholder="Product Name" label="Name" />
              <NewProductInput control={form.control} name="category" placeholder="Product Category" label="Category" />
            </div>

            <FormField
              control={form.control}
              name={"description"}
              render={({ field }) => (
                <div className="form-item">
                  <FormLabel className="form-label">{"Product Description"}</FormLabel>
                  <div className="flex w-full flex-col">
                    <FormControl>
                      <Textarea
                        placeholder={"Product Description"}
                        className={"input-class"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className={"form-message mt-2"} />
                  </div>
                </div>
              )}
            />

            <div className="grid grid-cols-3 gap-4">
              <div>
                <NewProductInput control={form.control} name="price" placeholder="Product Price" label="Price" />
              </div>
              <div>
                <NewProductInput control={form.control} name="sale" placeholder="Sale Percentage" label="Sale %" />
                {salePercentage > 0 && (
                  <p className="text-sm text-muted-foreground mt-1">Final Price: ₹{finalPrice.toFixed(2)}</p>
                )}
              </div>
              <NewProductInput control={form.control} name="quantity" placeholder="Product Quantity" label="Quantity" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Size</label>
                <Select
                  onValueChange={(value) => form.setValue("size", value as any)}
                  defaultValue={form.getValues("size")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizeOptions.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <NewProductInput control={form.control} name="tags" placeholder="Comma-separated tags" label="Tags" />
            </div>

            <Button type="submit" className="w-full">
              Create Product
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}
