const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const { createCatController , getAllCatController, updateCatController, deleteCatController} = require("../controller/categoryController");


const router = express.Router();

//routes
// CREATE CAT
router.post("/create", authMiddleware, createCatController);
//GET ALL CAT
router.get("/getAll",authMiddleware,  getAllCatController);
// UPDATE CAT
router.put("/update/:id", authMiddleware, updateCatController);

// DLEETE CAT
router.delete("/delete/:id", authMiddleware, deleteCatController);

module.exports = router;