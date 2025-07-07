const express = require("express");
const { getProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");

const router = express.Router();

router.get("/", getProducts);
router.post("/", auth, role("admin"), createProduct);
router.put("/:id", auth, role("admin"), updateProduct);
router.delete("/:id", auth, role("admin"), deleteProduct);

module.exports = router;
