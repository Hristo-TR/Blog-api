const router = require("express").Router();
const Category = require("../models/Category");

//Create
router.post("/", async (req, res)=>{
    const newCategory = new Category(req.body);
    try {
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get categories
router.get("/", async (req, res)=>{
    try {
        const categries = await Category.find();
        res.status(200).json(categries)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router