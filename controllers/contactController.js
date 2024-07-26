const asyncHandler = require("express-async-handler");

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
});

const createContact = asyncHandler(async (req, res) => {
    console.log("Request body: ", req.body);
    const { name, email, mobile } = req.body;
    if (!name || !email || !mobile) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(201).json({ message: "Create contact" });
});

const getContactById = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
})

const updateContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `Update contact for ${req.params.id}`});
})

const deleteContanct = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
})

module.exports = {
    getContact, 
    createContact, 
    getContactById,
    updateContact,
    deleteContanct
};