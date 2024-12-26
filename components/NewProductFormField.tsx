import { FormControl, FormField, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { newProductSchema } from "@/lib/formSchemas";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

interface NewProductFormProps {
  control: Control<z.infer<typeof newProductSchema>>;
  name: FieldPath<z.infer<typeof newProductSchema>>;
  placeholder: string;
  label: string;
}

const NewProductInput = ({ control, name, placeholder, label }: NewProductFormProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className={"input-class"}
                {...field}
                type={name === "price" || name === "quantity" || name === "sale" ? "number" : "text"}
              />
            </FormControl>
            <FormMessage className={"form-message mt-2"} />
          </div>
        </div>
      )}
    />
  );
};

export default NewProductInput;