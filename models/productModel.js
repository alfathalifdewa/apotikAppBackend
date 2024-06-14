import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    id_category: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: true,
    },
    indication: {
      type: String,
      required: true,
    },
    composition: {
      type: String,
      required: true,
    },
    dose: {
      type: String,
      required: true,
    },
    howtouse: {
      type: String,
      required: true,
    },
    effect: {
      type: String,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
    nie: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
