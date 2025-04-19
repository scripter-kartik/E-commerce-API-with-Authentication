import { Cart } from '../Models/Cart.js';
// add to cart
export const addToCart = async (req, res) => {
    const { productId, title, price, qty } = req.body;
    const userId = req.user;
};