import { User } from "../model/UserSchema.js"
import { createJWT } from "../utils/jwtTokens.js";
import { comparePassword,hashPassword} from "../utils/passwordUtils.js";

export const register = async (req, res) => {
    try {
        const hashedPassword = await hashPassword(req.body.password);
        req.body.password = hashedPassword;
        const user = await User.create(req.body); 
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};


export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isValidUser = await comparePassword(req.body.password, user.password);
        if (!isValidUser) {  
            return res.status(401).json({ message: "Wrong Password or invalid credentials" });
        }
        const token = createJWT({ userName: user.name, userEmail: user.email });
        console.log(token);
        const oneDay = 1000 * 60 * 60 * 24;
        res.cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + oneDay),
        });
        res.status(200).json({ message: "login successful" });
    } catch (err) {
        res.status(500).json({ message: "An error occurred" });
    }
};