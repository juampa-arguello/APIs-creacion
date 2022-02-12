const express = require("express");
const router = express.Router();
const {list, detail} = require("../controllers/apis/apiGenresController");
const {create, destroy} = require("../controllers/apis/apiMoviesController");

router.get("/genres", list);
router.get("/genres/:id", detail);

router.post("/movies/new", create);
router.delete("/movies/delete/:id", destroy);

module.exports = router;