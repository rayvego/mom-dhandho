import { z } from "zod";

// * This file contains zod schemas for all the forms in the application

export const newProductSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  description: z.string(),
  price: z.number().positive({ message: "Price must be a positive number" }),
  quantity: z.number().positive({ message: "Quantity must be a positive number" }),
  images: z.array(z.string()),
  sale: z.number().positive({ message: "Sale must be a positive number" }),
  category: z.string().nonempty({ message: "Type is required" }),
  tags: z.string(),
  size: z.enum(["XS", "S", "M", "L", "XL", "XXL"]),
});