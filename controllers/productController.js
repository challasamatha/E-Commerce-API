const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  const { page = 1, limit = 5, search = "", category = "" } = req.query;
  const filter = {
    name: { $regex: search, $options: "i" },
    ...(category && { category }),
  };
  const products = await Product.find(filter)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};
