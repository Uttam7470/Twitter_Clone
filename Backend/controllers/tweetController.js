import { Tweet } from "../models/tweetSchema.js";
import { getOtherUsers } from "./userController.js";
import { User } from "../models/userSchema.js";

export async function createTweet(req, res) {
  try {
    const { description, id } = req.body;
    if (!description || !id) {
      return res.status(401).json({
        message: "Fields are required.",
        success: false,
      });
    }
    const user = await User.findById(id).select('-password')
    await Tweet.create({
      description,
      userId: id,
      userDetails : user,
    });
    return res.status(201).json({
      message: "Tweet created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTweet(req, res) {
  try {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Tweet deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function likeOrDislike(req, res) {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const tweet = await Tweet.findById(tweetId);
    if (tweet.like.includes(loggedInUserId)) {
      // dislike
      await Tweet.findByIdAndUpdate(tweetId, {$pull: { like: loggedInUserId }});
      return res.status(200).json({
        message: "User disliked your tweet.",
      });
    } else {
      await Tweet.findByIdAndUpdate(tweetId, {$push: { like: loggedInUserId }});
      return res.status(200).json({
        message: "User liked your tweet.",
      });
    }
  } catch (error) {
    console.log(error);
  }
}


export async function getAllTweets(req, res) {
  try {
    const id = req.params.id.trim();  // Trim the id to remove any extra spaces
    const loggedInUser = await User.findById(id);
    const loggedInUserTweets = await Tweet.find({ userId: id });
    const followingUserTweet = await Promise.all(
      loggedInUser.following.map((OtherUsersId) => {
        return Tweet.find({ userId: OtherUsersId });
      })
    );
    return res.status(200).json({
      tweets: loggedInUserTweets.concat(...followingUserTweet),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getFollowingTweets(req,res){
  try {
    const id = req.params.id.trim();  // Trim the id to remove any extra spaces
    const loggedInUser = await User.findById(id);

    const followingUserTweet = await Promise.all(
      loggedInUser.following.map((OtherUsersId) => {
        return Tweet.find({ userId: OtherUsersId });
      })
    );
    return res.status(200).json({
      tweets: [].concat(...followingUserTweet),
    });
  } catch (error) {
    console.log(error);
  }
}













 
// import { Tweet } from "../models/tweetSchema.js";
// import { User } from "../models/userSchema.js"; // Import the User model to validate the user

// export async function createTweet(req, res) {
//     try {
//         const { description, email, userId } = req.body; // Assume you are passing email and userId

//         // Check if all fields are provided
//         if (!description || !email || !userId) {
//             return res.status(400).json({
//                 message: "Description, email, and userId are required.",
//                 success: false
//             });
//         }

//         // Find the user by email
//         const user = await User.findOne({ email });

//         // If user doesn't exist, return error
//         if (!user) {
//             return res.status(404).json({
//                 message: "User not found.",
//                 success: false
//             });
//         }

//         // Check if the provided userId matches the one from the database
//         if (user._id.toString() !== userId) {
//             return res.status(401).json({
//                 message: "Invalid user ID.",
//                 success: false
//             });
//         }

//         // Create the tweet
//         await Tweet.create({
//             description,
//             userId: user._id // Use the verified user ID
//         });

//         // Return success response
//         return res.status(201).json({
//             message: "Tweet created successfully.",
//             success: true
//         });
//     } catch (error) {
//         console.log(error);

//         // Return error response to the client
//         return res.status(500).json({
//             message: "An error occurred while creating the tweet.",
//             success: false
//         });
//     }
// }
