import authModel from "../models/authModel.js";
import bcryptjs from "bcryptjs";


class AuthController 
{
    static userRegisteration = async (req, res)=>{
        const {username, email, password} = req.body;
        try{
            if(username && email && password){
                const isUser = await authModel.findOne({email: email});
                if(isUser){
                    res.status(400).json({message: "User already exists"});
                }
                else{
                    const genSalt = await bcryptjs.genSalt(10);
                    const hashedPassword = await bcryptjs.hash(password, genSalt);
                    const newUser = authModel({
                        username: username,
                        email: email,
                        password: hashedPassword
                    });
                    const savedUser = await newUser.save();
                    if(savedUser){
                        return res.status(200).json({message: "Registered successfully"});
                    }
                }
            }
            else{
                res.status(404).json({message: "All fields are required"});
            }

        } catch(error){
            res.status(400).json({message: error.message});
        }
    }
    static userLogin = async (req, res)=>{
        res.send("user Login");
    }
}

export default AuthController;