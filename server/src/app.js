const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const watchRoutes = require("./routes/watchRoutes");
const moviesRoutes = require("./routes/moviesRoutes");
const showsRoutes = require("./routes/showsRoutes")

app.use("/watch", watchRoutes)
app.use("/movies", moviesRoutes)
app.use("/shows", showsRoutes )

module.exports = app