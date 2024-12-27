import express from 'express';
import User from './userModel';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator'


const router = express.Router();

function validPassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password)
}

router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const user = await User.findById(id);
        console.log(user);

        if (!user) {
            return res.status(404).json({ code: 404, msg: "User not found" });
        }

        res.status(200).json(user);

    } catch (error) {
        console.error(error);
        res.status(500).json({ code: 500, msg: "Internal server error" });
    }
})

router.post('/', asyncHandler(async (req, res) => {
    try {
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ success: false, msg: 'Username and password are required.' });
        }
        if (req.query.action === 'register') {
            await registerUser(req, res);
        } else {
            await authenticateUser(req, res);
        }
    } catch (error) {

        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));


router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await User.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'User Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update User' });
    }
});



async function registerUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() })
    }
    const {username, password} = req.body;
    if (!validPassword(password)) {
        return res.status(400).json({ success:false, msg:"Invalid password"})
    }
    const existingUser = await User.findOne({ username })
    if (existingUser) {
        return res.status(400).json({ success: false, msg: 'username already exists'})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
        username,
        password:hashedPassword
    })

    res.status(201).json({ success: true, msg: 'User successfully created.', user: {username:newUser.username} });
}

async function authenticateUser(req, res) {
    const user = await User.findByUserName(req.body.username);
    
    if (!user) {
        return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    }   
    
    const isMatch = await bcrypt.compare(req.body.password,user.password);
        
    if (isMatch) {
        const token = jwt.sign({ username: user.username }, process.env.SECRET);
        res.status(200).json({ success: true, token: 'BEARER ' + token });
    } else {
        res.status(401).json({ success: false, msg: 'Wrong password.' });
    }
}

export default router;