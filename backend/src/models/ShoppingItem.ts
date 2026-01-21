import { Schema, model } from "mongoose";

const shoppingItemSchema = new Schema(
  {
    name: { type: String, required: true },
    bought: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default model("ShoppingItem", shoppingItemSchema);
