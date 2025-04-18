import { Product } from '../Models/Product.js';
// add product
export const addProduct = async (req, res) => {
    try {
        let product = await Product.create(req.body);
        res.json({ message: "Product Added Successfully", product, success: true });
    } catch (error) {
        res.json(error.message);
    };
};
// get all products
export const getAllProducts = async (req, res) => {
    try {
        let products = await Product.find();
        if (!products) return res.json({ message: "No Product Found", success: false });
        res.json({ message: "Fetched all products", products, success: true });
    } catch (error) {
        res.json(error.message);
    }
}