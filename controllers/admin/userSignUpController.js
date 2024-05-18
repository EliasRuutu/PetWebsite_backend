const User = require('../../models/user');


const checkExistingUser = async function (email) {
    const existingUser = await User.findOne({ email });
    return existingUser;

} 

const signup = async function (req, res) {
    const { email, password, phone } = req.body;

    const existingUser = await checkExistingUser(email);

    if (existingUser) {
        res.status(409).json(existingUser);
    } else {
        const newUser = new User({
            email: email,
            password: password,
            phone: phone
        })
    
        newUser.save()
            .then((user) => {
                console.log('User saved successfully:', user);
                res.json("Signup success!");
            })
            .catch(error => {
                console.error('Error saving user:', error);
                res.json("Signup failed!", error);
            });
    }
}

module.exports = signup;
