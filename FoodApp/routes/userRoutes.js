const express = require("express");
const { getUserController, updateUserController, updatePasswordController, resetPasswordController, deleteProfileController } = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");


const router = express.Router();

//routes
// GET USER || GET
router.get("/getUser", authMiddleware, getUserController);

// UPDATE PROFILE
router.put("/updateUser", authMiddleware, updateUserController);

//password update
router.post("/updatePassword", authMiddleware, updatePasswordController);

// RESET PASSWORD
router.post("/resetPassword", authMiddleware, resetPasswordController);

// delete USER
router.delete("/deleteUser/:id", authMiddleware, deleteProfileController);

module.exports = router;