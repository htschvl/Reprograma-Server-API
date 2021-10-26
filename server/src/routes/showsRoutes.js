const controller = require("../controllers/showsController");
const express = require("express");
const router = express.Router();

///GET///
router.get("/", controller.getAll);
router.get("/search/:id", controller.getById);
router.get("/title", controller.getbyTitle);
router.get("/genre", controller.getbyGenre);

///POST///
router.post("/create", controller.createShow)

///PUT///
router.put("/update/:id", controller.updateShow)

///PATCH///
router.patch("/updateTitle/:id", controller.updateTitle);
router.patch("/update/:id", controller.updateShowId);

///DELETE///
router.delete("/delete/:id", controller.deleteShow)

///EXPORT///
module.exports = router