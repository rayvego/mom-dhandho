import mongoose, { models, Schema } from "mongoose";

const role = ["admin", "customer"];

const userSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  orders: {
    ref: "Product",
    type: Schema.Types.ObjectId,
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  cart: {
    ref: "Cart",
    type: Schema.Types.ObjectId,
  },
  role: {
    type: String,
    enum: role,
    default: "customer",
  }
})

const Users = models.Users || mongoose.model("Users", userSchema);

export default Users;