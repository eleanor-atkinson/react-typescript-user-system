"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfile = exports.registerUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User_1.default({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User created', user: newUser });
    }
    catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};
exports.registerUser = registerUser;
const getUserProfile = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await User_1.default.findById(userId);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Profile retrieval failed' });
    }
};
exports.getUserProfile = getUserProfile;
