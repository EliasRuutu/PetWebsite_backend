const User = require('../models/user');
const bcrypt = require('bcrypt');

const signin = async function (req, res) {
    const { signInEmail, signInPassword } = req.body;
    const signnedUser = await User.findOne({ email: signInEmail });
    const hashedSignInPassword = await bcrypt.hashSync(signInPassword, signnedUser.salt);
    console.log("===================", signnedUser);
    console.log("-------------------", hashedSignInPassword);
    if (signnedUser && (signnedUser.password === hashedSignInPassword)) {
        console.log("Success:", signInEmail);
        res.json("Succss");
    }
    else {
        console.log("User doesn't exist:", signnedUser);
        res.json("User doesn't exist:");
    }
}

module.exports = signin;