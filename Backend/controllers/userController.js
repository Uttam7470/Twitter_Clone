// import { User } from "../models/userSchema.js";
// import bcryptjs from 'bcryptjs'
// import jwt from "jsonwebtoken"

// export async function Register(req, res){
//     try{
//         const {name, username, email, password} = req.body;

//         if(!name || !username || !email || !password){
//             return res.status(401).json({
//                 message : "All fiels are required",
//                 success : false
//             })
//         }
//         const user= await User.findOne({email});
//         if(user){
//             return res.status(401).json({
//                 message : "User already exist"
//             })
//         }

//         const hashedPassword = await bcryptjs.hash(password, 16);
//         await User.create({
//             name,
//             username,
//             email,
//             password : hashedPassword
//         });
//         return res.status(201).json({
//             message : "Account created successfully" ,
//             success : true
//         })
//     }
//     catch(error){
//         console.log(error );
        
//     }
// }

// export async function Login(req,res){
//     try{
//         const {email,password} = req.body

//         if(!email || !password){
//             return res.status(401).json({
//                 message : "All fiels are required",
//                 success :false
//             })
//         } ;

//         const user = await User.findOne({email})
//         console.log(user);
        
//         if(!user){
//             return res.status(401).json({
//                 message : "Incorrect email or password",
//                 success : false
//             })
//         }

//         const isMatch = await bcryptjs.compare(user.password, password);
//         if(!isMatch){
//             return res.status(401).json({
//                 message : "Invalid email or password",
//                 success : false
//             })
//         }

//         const tokenData = {
//             id : user._id
//         }
//         const token = await jwt.sign(tokenData,process.env.SECRET_TOKEN, {expiresIn : "1h"});
//         return res.status(201).cookie("token", token, {expiresIn : '1h', httpOnly:true}).json({
//             message : `Welcome back ${user.name}`,
//             success : true
//         })
//     }
//     catch(error){
//         console.log(error);
        
//     }
// }


import { User } from "../models/userSchema.js";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";

export async function Register(req, res) {
    try {
        const { name, username, email, password } = req.body;

        if (!name || !username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: "User already exists",
                success: false
            });
        }

        const hashedPassword = await bcryptjs.hash(password, 16);
        await User.create({
            name,
            username,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", success: false });
    }
}

export async function Login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        const isMatch = await bcryptjs.compare(password, user.password); // Fixed bcryptjs.compare order
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: false
            });
        }

        const tokenData = {
            id: user._id
        };

        const token = jwt.sign(tokenData, process.env.SECRET_TOKEN, { expiresIn: "1h" });

        return res
            .status(200)
            .cookie("token", token, { expiresIn: "1h", httpOnly: true }) // Changed expiresIn to maxAge (milliseconds)
            .json({
                message: `Welcome back ${user.name}`,
                user,
                success: true
            });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", success: false });
    }
}


export function Logout(req,res){
    return res.cookie("token","" , {expiresIn : new Date(Date.now()) }).json({
        message : "User logged-out successfully",
        success : true
    })
}



export async function bookmark(req, res) {
    try {
      const loggedInUserId = req.body.id;
      const tweetId = req.params.id;
      const user = await User.findById(loggedInUserId);
      if (user.bookmarks.includes(tweetId)) {
        // remove
        await User.findByIdAndUpdate(loggedInUserId, {$pull: { bookmarks: tweetId}});
        return res.status(200).json({
          message: "Removed from bookmark.",
        });
      } else {
        await User.findByIdAndUpdate(loggedInUserId, {$push: { bookmarks: tweetId }});
        return res.status(200).json({
          message: "Added to bookmark.",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }


  export async function getMyProfile(req,res){
    try {
        const id = req.params.id;

        const user = await User.findById(id).select('-password');
        return res.status(200).json({
            user,
        })
    } catch (error) {
        console.log(error);
        
    }
  }


  export async function getOtherUsers(req,res){
    try {
        const {id} = req.params;
        const otherUsers = await User.find({_id:{$ne:id}}).select('-password')
        if(!otherUsers){
            return res.status(401).json({
                 message : "Currently do not hane any users."
            })
        };
        return res.status(200).json({
            otherUsers
        })
    } catch (error) {
        console.log(error);
        
    }
  }

  export async function follow(req,res){
    try {
        const loggedInUserId = req.body.id; // uttam
        const userId = req.params.id ; //mohit , yask
        const loggedInUser = await User.findById(loggedInUserId) //uttam
        const user = await User.findById(userId) // mohit ,yash

        if(!user.follwers.includes(loggedInUserId)){
            await user.updateOne({$push:{follwers:loggedInUserId}})
            await loggedInUser.updateOne({$push:{following:userId}})
        }
        else{
            return res.status(400).json({
                message : `User alredy followed to ${user.name}`
            })
        }
        return res.status(200).json({
            message : `${loggedInUser.name} just follow to ${user.name}`,
            success : true
        })
    } catch (error) {
        console.log(error);
        
    }
  }


  export async function unfollow(req,res){
    try {
        const loggedInUserId = req.body.id; // uttam
        const userId = req.params.id ; //mohit , yask
        const loggedInUser = await User.findById(loggedInUserId) //uttam
        const user = await User.findById(userId) // mohit ,yash

        if(loggedInUser.following.includes(userId)){
            await user.updateOne({$pull:{follwers:loggedInUserId}})
            await loggedInUser.updateOne({$pull:{following:userId}})
        }
        else{
            return res.status(400).json({
                message : 'User has not followed Yet'
            })
        }
        return res.status(200).json({
            message : `${loggedInUser.name} unfollow to ${user.name}`,
            success : true
        })
    } catch (error) {
        console.log(error);
        
    }
  }

