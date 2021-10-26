const controller = require("../controllers/moviesController")
const express = require("express") 
const router = express.Router() 

///GET///
router.get("/", controller.getAll);
router.get("/search/:id", controller.getById);
router.get("/title", controller.getByTitle);
router.get("/filter", controller.getByGenre);

///POST//
router.post("/create", controller.createMovie);

///PUT///
router.put("/update/:id", controller.updateMovie);

///PATCH///
router.patch("/updateTitle/:id", controller.updateTitle);
router.patch("/update/:id", controller.updateMovie);

///DELETE///
router.delete("/delete/:id", controller.deleteMovie);

///EXPORT///
module.exports = router