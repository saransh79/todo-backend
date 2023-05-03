import User from "../model/User.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    try {
        const { password, email, name } = req.body;

        const userEmail = await User.findOne({ email: email });

        if (userEmail) return res.status(400).json("You are already registered. Please Sign in.");

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)

        const userData = new User({
            password: passwordHash,
            email,
            name
        })
        const savedUser = await userData.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });

        if (!user) return res.status(400).json("User does not exist. ");

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
            return res.status(400).json("Incorrect Password. ");

        res.status(200).json(user);

    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
};