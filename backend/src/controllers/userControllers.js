import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModels.js";

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { username, email, password, confirmPassword, roles } = req.body;
    console.log(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);
    if (password !== confirmPassword) {
      return res
        .status(401)
        .json({ error: "Password and confirm password do not match" });
    }

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      roles,
    });

    if (user.email === process.env.ADMIN_EMAIL) {
      user.roles = "ADMIN";
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

    // Determine user's role
    const userRole = user.email === process.env.ADMIN_EMAIL ? "ADMIN" : "CLIENT";

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, roles: userRole },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    console.log("success");
    res.status(200).json({ token, role: userRole });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getUserDetails = async (req, res) => {
  try {
    const user = await User.find({});
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const getUserById = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id).select('-password');
//         if (user) {
//         res.status(200).json(user);
//         } else {
//         res.status(400).json({ error: 'User not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
//     }

// const deleteUserById= async(req, res)=>{
//   try {
//     const user = await User.findById(req.params.id);
//     if(user){
//       await user.remove();
//       res.status(200).json({message: 'User removed successfully'});
//     }
//     else
//     {
//       res.status(400).json({error: 'User not found'});
//     }

//   }
//   catch (error) {
//     res.status(500).json({ error: error.message });
// }
// };

// const logoutUser = (req, res) => {
//   try {
//     // Clear the JWT token from the client-side (local storage)
//     localStorage.removeItem("token");
//     res.status(200).json({ message: "User logged out successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

export { registerUser, loginUser, getUserDetails };
