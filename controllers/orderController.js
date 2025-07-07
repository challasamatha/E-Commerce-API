const Cart = require("../models/Cart");
const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart || cart.items.length === 0) return res.status(400).json({ message: "Cart is empty" });

  const order = await Order.create({
    userId: req.user.id,
    products: cart.items,
  });

  cart.items = [];
  await cart.save();

  res.status(201).json(order);
};
