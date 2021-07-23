const express = require('express');
const router  = express.Router();
const User = require('../models/userModel');

router.post("/register", async(req,res) => {
    const {name,email,password} = req.body
    const newUser = new User({name,email,password})
    try {
        newUser.save()
        res.send('User Registered Successfully')
    } catch (error) {
        return res.status(400).json({message : error});
    }
})


router.post("/login", async(req,res) => {
    const {email,password} = req.body
    
    try {
        const user = await User.find({email,password})
        if(user.length>0)
        {
           ///res.send('User Login Succssfully')
            ///res.send(user[0])
            const currentUser ={
                name: user[0].name,
                email: user[0].email,
                isAdmin : user[0].isAdmin,
                _id : user[0]._id
            }
            res.send(currentUser)
        }
        ///res.send(users)

    } catch (error) {
        return res.status(400).json({message: 'login '});
    }


})

router.get("/getallusers", async(req,res) => {
    try {
         const users = await User.find({})
            res.send(users)
    } catch (error) {
        console.log("somthing get users")
        return res.status(400).json({message : "somthing gt users"+error});
    }
})


router.post("/deleteuser", async(req,res) => {
    const userid = req.body.userid
    try {
        await User.findOneAndDelete({_id : userid})
        res.send("user D eleted successfully")
    } catch (error) {
        return res.status(400).json({message : error});
    }
})
module.exports = router