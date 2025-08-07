const express = require("express");
const calculatorController = require("../controllers/calculatorController");
const router = express.Router();
router.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});

router.get("/sub", (req, res) => {
  calculatorController.subNumbers(req, res);
});

router.get("/div", (req, res) => {
  calculatorController.divNumbers(req, res);
});

router.get("/multi", (req, res) => {
  calculatorController.multiNumbers(req, res);
});

module.exports = router;
