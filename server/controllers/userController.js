// wee create different controller functions for registration login logout
import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken" //create token for user authentication

//controller function
export const registerUser = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password) {
            return res.json({success: false, message:'MissingDetails'});
        }

        //if all provided {encrypt password}
        const salt = await bcrypt.genSalt(10); //if we increase 10 it will take more time {more value more secure}
        const hashPassword = await bcrypt.hash(password,salt)

        //create a oject where we store all the users data
        const userData = {
            name,
            email,
            password:hashPassword
        }

        //save data in mongoDb database
        const newUser = new userModel(userData)
        //save user in database
        const user = await newUser.save()

        //generate a tkn that will be sent in response so we can enable the login and registration in frontend {along with id we will create another secret key}
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

        //send the token in response
        return res.json({success:true, token, user:{name: user.name}})
    } catch (error) {
        console.log(error)
        return res.status(400).json({success:false, message:error.message})

    }
}

export const loginUser = async(req,res)=>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email})
        if(!user) {
            return res.status(404).json({success:false,message:"User does not exist"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(isMatch) {
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            return res.status(200).json({success:true, token, user:{name: user.name}})
        } else {
            return res.status(401).json({success:false, message:"Invalid credentials"})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false, message:error.message})
    }
}

// export {loginUser, registerUser}

export const useCredits = async(req,res) => {
    try {
        const userId = req.user.id;

        const user = await userModel.findById(userId)
        return res.json({success:true, credits: user.creditNumber, user:{name:user.name}})
    } catch (error) {
        console.log(error.message);
        return res.json({success:false,message:error.message})
    }
}
