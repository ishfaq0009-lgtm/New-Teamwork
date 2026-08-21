import mongoose from "mongoose";

let AddProductSchema = mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    price: Number,
    size: String,
    quality: String,
    color: String,
    stock: String,
    discount: Number,
    category: String
});

let AddProductModel = mongoose.model("AddProduct", AddProductSchema);

export default AddProductModel;