const moviesJSON = require("../models/movies.json")
const showsJSON = require("../models/shows.json")

//GET//
const getAll = (req, res) => {
    res.status(200).send([moviesJSON,showsJSON])
}

module.exports = {
    getAll
}