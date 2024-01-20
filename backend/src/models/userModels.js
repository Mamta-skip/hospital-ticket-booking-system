import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:[true, "Please enter a password"],
        },
        Refresh_token:{
            type: String
        }
    },
        
    
    {timestamps:true}
    );




//generating jwt token
userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id : this._id,
        email : this.email
    });
    process.env.ACCESS_TOKEN_SECRET
    {
        expiresIn : process.env.ACCESS_TOKEN_EXPIRY
    }
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id : this._id,
        email : this.email
    });
    process.env.ACCESS_TOKEN_SECRET
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    }
}
const User = mongoose.model("User",userSchema);

export default User;