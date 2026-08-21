import express from "express";
import AddProductModel from "../Model/AddProductModel.js";
import PlaceOrderModel from "../Model/PlaceOrderModel.js";


let router=express.Router()



router.post("/AddProduct",async function(req,res){

    let data=req.body;

    let AddProductData= await AddProductModel.create(data);

    return res.json({success:true,msg:"This is AddProductApi is successFull"});
});



router.get("/AllProduct",async function(req,res){

    let AllProductData= await AddProductModel.find();

    return res.json({success:true,msg:"This is AllProductApi is successFull", AllProduct: AllProductData });
});

router.post("/OrderProduct", async function (req,res){

    let orderData=req.body;

    let ProductOrder=await PlaceOrderModel.create(orderData);

    return res.json({success:true,msg: "This is OrderDataApi is successFull"});
});

export default router;