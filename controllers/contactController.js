const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//private access
const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

//private access
const createContact = asyncHandler(async (req, res) => {
    console.log("Request body: ", req.body);
    const { name, email, mobile } = req.body;
    if (!name || !email || !mobile) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const contact = await Contact.create({
        name,
        email,
        mobile,
        user_id:req.user.id
    })
    res.status(201).json(contact);
});

//private access
const getContactById = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found!");
    }
    res.status(200).json(contact);
})

//private access
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found!");
    }

    //here
    if(contact.user_id.toString()!==req.user.id){
        res.status(404);
        throw new Error("User dont have permission to update other user contact")
    }


    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact);
})

//private access
const deleteContanct = asyncHandler(async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found!");
    }
   
    res.status(200).json(contact);//contact that has been removed
})

module.exports = {
    getContact,
    createContact,
    getContactById,
    updateContact,
    deleteContanct
};