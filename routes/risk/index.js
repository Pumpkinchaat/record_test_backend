const express = require("express");
const router = express.Router();
const { authenticate } = require("../../controllers/auth");
const User = require("../../models/users");
const {createRisk} = require("../../controllers/risk");

//create a new risk
router.route("/").post(authenticate(User) , createRisk);

module.exports = router;
