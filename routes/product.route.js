//for the routes

const exp = require("express");
const router = exp.Router();
const Product = require("../models/products.models.js");
const { getProducts,getProduct,
        updateProduct,deleteProduct,
        createProduct } = require("../controllers/product.controllers.js")

router.get("/",getProducts);
router.get("/:id",getProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);
router.post("/",createProduct);

module.exports = router