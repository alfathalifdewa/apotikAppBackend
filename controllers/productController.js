import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
    try {
        let product = await Product.find();
        res.status(201).json({ product })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error")
    }
}

export const postProducts = async (req, res) => {
    const { productName, quantity, category } = req.body;
    try {
        const newProduct = new Product({
            productName,
            quantity,
            category
        });
        const saveProduct = await newProduct.save();
        res.status(201).json({ saveProduct });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
};
