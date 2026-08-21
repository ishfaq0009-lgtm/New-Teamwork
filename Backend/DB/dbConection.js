import mongoose from 'mongoose'



async function dbConnection() {

try{

    await mongoose.connect("mongodb://localhost:27017/e-commrerce")
console.log("The db is runnig");


}   catch (error) {

console.log(error, "The error from db connection");

}


    
}




export default dbConnection