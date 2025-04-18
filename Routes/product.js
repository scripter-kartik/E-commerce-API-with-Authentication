import express from 'express';
import { addProduct } from '../Controllers/product.js';
const router = express.Router();
// add product
// @api - /api/product/add
router.post('/add', addProduct)
export default router;