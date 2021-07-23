const express = require('express');
const router  = express.Router();
const Pizza = require('../models/pizzaModel')

router.get("/getallpizzas", async(req,res) => {

    try {
        const pizzas = await Pizza.find({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({message : error});
    }


})


router.post("/addpizza", async(req,res) =>{
    const pizza=req.body.pizza
    res.send(pizza.description);
    try {
        const newpizza = new Pizza({
            name: pizza.name,
            image: pizza.image,
            varients:["small","medium","large"],
            description: pizza.description,
            category : pizza.category,
            prices : [pizza.prices]
        });
        await newpizza.save()
        res.send('New pizza add successfully')
    } catch (error) {
        
        return res.status(400).json({message : error});
    }

})

router.post("/getpizzabyid", async(req,res)=>{
    const pizzaid = req.body.pizzaid
    try {
        const pizza = await Pizza.findOne({_id : pizzaid})
        res.send(pizza)
    } catch (error) {
        
        return res.status(400).json({message : error});
    }
})
router.post("/editpizza", async(req,res)=>{
    const editpizza = req.body.editpizza
    try {
        const pizza = await Pizza.findOne({_id : editpizza._id})
        
        pizza.name = editpizza.name,
        pizza.description= editpizza.description,
        pizza.category= editpizza.category,
        pizza.image= editpizza.image,
        pizza.prices= [editpizza.prices],
        await pizza.save()
        res.send("pizza deatial updeted sccussfully")
    } catch (error) {
        
        return res.status(400).json({message : error});
    }
});

router.post("/deletepizza", async(req,res) => {

    const pizzaid= req.body.pizzaid
    try {
            await Pizza.findOneAndDelete({_id : pizzaid})
            res.send("Pizza deleted successfully")  
    } catch (error) {
            return res.status(400).json({message : error});
        }
});

module.exports = router;