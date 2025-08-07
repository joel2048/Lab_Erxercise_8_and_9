const express = require("express");
const router = express.Router();
const animeController = require("../controllers/animeController");

router.get('/all', (req, res) => {
    animeController.getAnime(req, res);
})

router.get('/:attribute', (req, res) => {
    animeController.getAnimeByFilter(req, res);
})

module.exports = router;