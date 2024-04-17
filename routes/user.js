const express = require('express');
const router = express.Router();

const userSignUp = require('../controllers/userController');
const userSignIn = require("../controllers/userSignInController");

router.post("/signup", userSignUp);
router.post("/signin", userSignIn);

module.exports = router;