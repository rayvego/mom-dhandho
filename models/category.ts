import mongoose, { models, Schema } from "mongoose";

const categorySchema = new Schema({
  
})

const Categories = models.Category || mongoose.model("Category", categorySchema);

export default Categories;