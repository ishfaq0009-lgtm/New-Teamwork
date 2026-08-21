import mongoose from "mongoose"

async function dbConection() {

    try {
        await mongoose.connect("mongodb://localhost:27017/e-commerce")
        console.log("This is db connect ")
        
    } catch (error) {
        console.log("This is db  error ");
    }
}

export default dbConection
