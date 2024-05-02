const User = require('../../models/user');
const bcrypt = require('bcrypt');

const signin = async function (req, res) {
    const { signInEmail, signInPassword } = req.body;
    const signedUser = await User.findOne({ email: signInEmail });
    try {
        if(signedUser) {
            const isMatch = await bcrypt.compare(signInPassword, signedUser.password);
            if (isMatch) {
                console.log("login success")
                res.status(200).json("Login Succss");
            } else {
                console.log("password error")
                res.status(403).json("Password Error");
            }
        } else {
            console.log("user not found error");
            res.status(404).json("Password Error");
        }     
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: err.message });
    };
}

module.exports = signin;