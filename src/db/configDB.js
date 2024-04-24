import mongoose from "mongoose";

const uri = "mongodb://127.0.0.1:27017/blog";
const configDB = async ()=>{
    try{
          await mongoose.connect(uri);
    }
    catch(err){
        console.log(err);
    }
}

export default configDB;