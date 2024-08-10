const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
} = require("../controller/resturantController");

const router = express.Router();

//routes
// GET USER || GET
//create resturant

router.post("/create", authMiddleware, createResturantController);

//get
router.get("/getAll", authMiddleware, getAllResturantController);

// GET RESTURANT BY ID || GET
router.get("/get/:id",authMiddleware,  getResturantByIdController);

// DELETE RESTURANT || DELETE
router.delete("/delete/:id", authMiddleware, deleteResturantController);



module.exports = router;
