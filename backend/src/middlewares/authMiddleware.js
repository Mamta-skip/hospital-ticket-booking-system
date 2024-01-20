import jwt from "jsonwebtoken"
import User from "../models/userModels.js"

 const verifyJwt =  async(req,res,next)=>{
    try{
        const  token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer " ,"");

    if(!token){
        res.status(401).json({message:"Unauthorized request"});

    }

     const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

     const user = await User.findById(decoded?._id).select("-password -accessToken");

     if(!user){
        res.status(401).json({
            message : " Invalid AccessToken "
        })
     }
     req.user = user;
     next()
    }


catch(error){
res.status(401).json({
    message:error.message
})
}
}


export {verifyJwt}