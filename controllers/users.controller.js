let users = require("../models/users.model");
const { v4 : uuid4} = require("uuid");

const getAllUsers = (req,res)=>{
    res.status(200).json({users});
};

// Create User
const createUser = (req,res)=>{
    const newUser = {
        id : uuid4(),
        name : req.body.name,
        email: req.body.email,
    };
    users.push(newUser);
    res.status(200).json(users);
};

// Update User
const updateUser = (req,res)=>{
    const userId = req.params.id;
    const {name, email} = req.body;

    users.filter((user) => user.id === userId).map((selecteduser)=>{
        selecteduser.name = name;
        selecteduser.email = email; 
    });

    res.status(200).json(users);
    //res.status(200).json({message: userId});
};

// Update User 
const deleteUser = (req,res)=>{
    const userId = req.params.id;

    users = users.filter((user) => user.id !== userId);
   

    res.status(200).json(users);  
    //res.status(200).json({message: userId});
};

module.exports = {getAllUsers,createUser, updateUser, deleteUser};