import express from "express"
import cors from "cors"
import dbConection from "./DB/dbConection.js"
import ProductRoute from "./Routes/Product.route.js"

dbConection()


let app= express();

app.use(cors())
app.use(express.json())

app.listen(4000,async function(){
    console.log("Server is running")
});


