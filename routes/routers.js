const express = require('express');
const multer = require('multer');

const addAssign = require("../controllers/Assign/addController")
const getAllTags = require("../controllers/Assign/getAllTags")

const userSignUp = require('../controllers/admin/userSignUpController');
const userSignIn = require("../controllers/admin/userSignInController");
const registerClient = require("../controllers/client/clientRegisterController");
const getAllClients = require("../controllers/client/getClientController");
const registerPet = require("../controllers/pet/petsRegisterController");
const getAllPets = require("../controllers/pet/getAllPetsController")

const router = express.Router();

const clientStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../frontend/public/assets/images/clients');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now()+Math.round(Math.random()*1E9);
        const originalExtension = file.originalname.split('.').pop();
        cb(null, uniqueSuffix +'.'+originalExtension);
    }
});

const uploadClientAvatar = multer({ storage: clientStorage });

const petStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../frontend/public/assets/images/pets');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now()+Math.round(Math.random()*1E9);
        const originalExtension = file.originalname.split('.').pop();
        cb(null, uniqueSuffix +'.'+originalExtension);
    }
});

const uploadPetAvatar = multer({ storage: petStorage });

router.post("/add_tagid", addAssign);
router.get("/getAllIdTags", getAllTags)

router.post("/signup", userSignUp);
router.post("/signin", userSignIn);
router.post("/register", uploadClientAvatar.single('avatar'), registerClient);
router.get("/getAllClientInfos", getAllClients);

router.post("/pet", uploadPetAvatar.single('petAvatar'), registerPet)
router.get("/getallpets", getAllPets)


module.exports = router;