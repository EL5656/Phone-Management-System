const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

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
    })
    res.status(201).json(contact);
});

const getContactById = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found!");
    }
    res.status(200).json(contact);
})

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found!");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact);
})

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