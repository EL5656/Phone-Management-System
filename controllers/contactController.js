
const getContact = async (req,res)=>{
    res.status(200).json({message: "Get all contacts"});
}

const createContact = async (req,res)=>{
    console.log("Request body: ",req.body);
    const {name, email, mobile} = req.body;
    if(!name||!email||!mobile){
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
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