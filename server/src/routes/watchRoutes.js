const controller = require("../controllers/watchController")
const express = require("express") 
const router = express.Router() 

///GET///
router.get("/", controller.getAll) 

///EXPORT///
module.exports = router
