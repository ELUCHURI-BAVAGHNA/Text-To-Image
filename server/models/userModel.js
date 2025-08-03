import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, unique:true, required:true},
    password: {type:String, required:true},
    creditNumber: {type: Number, default:5}
})

const userModel = mongoose.models.user || mongoose.model("user",userSchema); // creates a new model if doesnot exista else write in the already existed database

export default userModel
//by using this user model we will create different apis and then user can create account and login into account