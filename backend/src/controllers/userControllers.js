import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModels.js";

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { username, email, password,confirmPassword,roles} =
      req.body;
    console.log(req.body);

    
 const hashedPassword = await bcrypt.hash(password, 10);
 if(password!==confirmPassword){
      return res.status(401).json({error:"Password and confirm password do not match"});
 }

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      roles,

      
    
    });

  if(user.email===process.env.ADMIN_EMAIL){
    user.roles="ADMIN";
  }


   
    // Save the user to the database
    await user.save();
       res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found or password is incorrect
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate JWT token

    const token = jwt.sign(
      { userId: user._id, roles: user.roles },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    
    

    
    console.log("success");
    res.status(200).json({ token, role: user.roles });


  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};




export{registerUser,loginUser};