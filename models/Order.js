import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxLength: 60,
    },
    address: {
      type: String,
      required: true,
      maxLength: 200,
    },
    email: {
      type: String,
      required: true,
      maxLength: 200,
    },
    phone: {
      type: Number,
      required: true,
      maxLength: 10,
    },

    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
