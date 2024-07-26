

const getContact = (req,res)=>{
    res.status(200).json({message: "Get all contacts"});
}

const createContact = (req,res)=>{
    res.status(201).json({message: "Create contact"});
}

const getContactById = (req,res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`});
}

const updateContact = (req,res)=>{
    res.status(200).json({message: `Update contact for ${req.params.id}`});
}

const deleteContanct = (req,res)=>{
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
}

module.exports = {
    getContact, 
    createContact, 
    getContactById,
    updateContact,
    deleteContanct
};