import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    category:{
        type:String,
        required: false
    }
},
{
    timestamps: true
})

const Product = mongoose.model('Product', ProductSchema);
export default Product;