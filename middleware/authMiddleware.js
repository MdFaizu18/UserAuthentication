import {verifyJWT} from '../utils/jwtTokens.js'

export const authenticateUser = async (req, res, next) => {
   
     const {token}=req.cookies;
     console.log(token);
        if(!token){
            return res.status(401).json({message:"Unauthorized access"});
        }
    try {
        const { userName, userEmail } = verifyJWT(token);
        req.user = { userName, userEmail };
        console.log(req.user);
        next();
    } catch (error) {
        return next();
    }
};