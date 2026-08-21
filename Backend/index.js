import express from "express"
import cors from "cors"
let app = express()
import dbConnection from "./database/dbConnection.js"
dbConnection()

app.use(cors())
app.use(express.json())



app.listen(4000, function () {

  console.log("The server is runing on 4000");

})