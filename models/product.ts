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
  image: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  reviews: {
    ref: "Review",
    type: Schema.Types.ObjectId,
  },
})

const Products = models.Products || mongoose.model("Products", productSchema);

export default Products;