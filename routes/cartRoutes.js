const express = require("express");
const { addToCart, getCart, removeFromCart } = require("../controllers/cartController");
const auth = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", auth, getCart);
router.post("/add", auth, addToCart);
router.post("/remove", auth, removeFromCart);

module.exports = router;
