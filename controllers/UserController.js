import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { username, email, password, img_url, phone } = req.body;

    try {
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ username, email, password, img_url, phone });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        res.json({ msg : "User Registered" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = { user: { id: user.id, role: user.role } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token, user:{
                username
            } });
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.findById(req.user.id).select('-password'); // Exclude the password field
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

