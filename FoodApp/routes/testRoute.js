const express = require("express")
const testUserController = require("../controller/testController")

//object

const router = express.Router()
//get |post |update|delete
router.get('/test-user' , testUserController)

//export

module.exports = router