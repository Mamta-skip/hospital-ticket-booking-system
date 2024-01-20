import bcrypt from "bcrypt";
import User from "../models/userModels.js";

const registerUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        console.log(req.body);

        const hashedPassword = await bcrypt.hash(password, 12);
    
        //creating a newUser
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });
        
        //checking if the user already exists
        // const existedUser = User.findOne({ email });    
        // if(existedUser){
        // res.status(400).json({message:"User already exists"});
        // }
            

       // saving the user
        await user.save();
        res.status(201).json({"message":"User created successfully"});
    }
    
    catch(error){
        res.status(500).json({message:error.message});
    }
   
    

}


//generate access and refresh token



const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;

        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        console.error(error); // Log the error for debugging
        throw new Error("Something went wrong");
    }
};


//login user 
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // checking if the user exists
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Password is incorrect" });
        }

        const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);

        const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

        const options = {
            httpOnly: true,
            secure: true,
        };

        res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json({
                user: loggedInUser,
                accessToken,
                refreshToken,
                message: "User logged in successfully!!",
            });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};


//for user logout

const logoutUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(
            req.user._id,
            {
                $set: {
                    refreshToken: undefined
                },
                new: true
            }
        );

        const options = {
            httpOnly: true,
            secure: true
        };

        res.status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json({
                message: "User logged out successfully"
            });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong during logout"
        });
    }
};
  




export { registerUser,
          loginUser,
          logoutUser
          }