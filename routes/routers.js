const express = require('express');
const router = express.Router();

const userSignUp = require('../controllers/userSignUpController');
const userSignIn = require("../controllers/userSignInController");
const registerClient = require("../controllers/clientRegisterController");

router.post("/signup", userSignUp);
router.post("/signin", userSignIn);
router.post("/register", registerClient);

module.exports = router;