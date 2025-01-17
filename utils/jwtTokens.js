//to create the generate the token
import jwt from 'jsonwebtoken';

export const createJWT = (payload)=>{
   const token = jwt.sign(payload,'secret',{
    expiresIn: '1d',
   });
   return token;
}

export const verifyJWT = async (token)=>{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
}