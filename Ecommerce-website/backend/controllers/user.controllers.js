import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js";

const createToken = (id)=> {
        return jwt.sign({id},process.env.JWT_SECRET)
}

// Register a new user
export const registerUser = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;

        // checking user already exists or not

        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({success: false, message:"User already exists"})
        }
        // validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter a valid email"})
        }
        if (password.length < 8) {
            return res.json({success: false, message: "Please enter a strong password"})
        }

        // hashing user password

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,  salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success: true, token})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// Login User
export const loginUser = async (req, res, next) => {
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})
        if (!user) {
            return res.json({success: false, message: "User does not exist"})
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = createToken(user._id)
            res.json({success: true, token})
        }
        else{
            res.json({success: false, message: 'Invalid credentials'})
        }
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// logout user
export const logoutUser = async (req, res, next) => {
    res.send("Welcome")
}

// Route for admin login
export const adminLogin = async (req, res, next) => {
    try {
        const {email, password} =req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);    
            res.json({success: true, token})

        }else {
            res.json({success: false, message: 'Invalid email or password'})
        }
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}