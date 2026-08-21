import mongoose from "mongoose";


let OrderSchema=mongoose.Schema({
    name: String,
    address: String,
    phone: Number,
    product: String,
    quantity: String,
    price: Number
});

let PlaceOrderModel=mongoose.model("YourOrderPlace",OrderSchema);

export default PlaceOrderModel;