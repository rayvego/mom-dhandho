import mongoose, { models, Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  images: {
    type: [String],
    default: [],
  },
  size: {
    type: String,
    enum: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  tags: {
    type: [String],
    default: [],
  },
  type: {
    type: String,
    required: true,
    default: "saree",
  },
  sale: {
    type: Number,
    default: 0,
  },
});

const Products = models.Products || mongoose.model("Products", productSchema);

export default Products;