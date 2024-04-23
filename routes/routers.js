const express = require('express');
const multer = require('multer');
const userSignUp = require('../controllers/userSignUpController');
const userSignIn = require("../controllers/userSignInController");
const registerClient = require("../controllers/clientRegisterController");

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/clients');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

router.post("/signup", userSignUp);
router.post("/signin", userSignIn);
router.post("/register", upload.single('avatar'), registerClient);

module.exports = router;