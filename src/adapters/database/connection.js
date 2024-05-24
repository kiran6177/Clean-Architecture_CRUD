import mongoose from "mongoose";


export const connection = ()=>{
    mongoose.connect("mongodb://localhost:27017/clean-demo ");

    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB");
    })
    
    mongoose.connection.on("error", (err) => {
      console.log("Error connecting to MongoDB");
    })
    
    mongoose.connection.on("disconnected", () => {
      console.log("Disconnected from MongoDB");
    })
}