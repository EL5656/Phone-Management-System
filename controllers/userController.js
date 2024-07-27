const asyncHandler = require("express-async-handler");

//register user
//public
const registerUser = asyncHandler(async(req,res)=>{
    res.json({message:"Register the user"});
});

//login user
//public
const loginUser = asyncHandler(async(req,res)=>{
    res.json({message:"Login user"});
});

//current user
//private
const currentUser = asyncHandler(async(req,res)=>{
    res.json({message:"Current user information"});
});

module.exports = {registerUser,loginUser, currentUser};