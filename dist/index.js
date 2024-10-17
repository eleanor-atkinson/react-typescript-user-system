"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const http = __importStar(require("http"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
dotenv_1.default.config();
const MONGO_URL = `${process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017'}/user_profiles`;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';
const port = parseInt(process.env.PORT || '8000');
mongoose_1.default.connect(MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error: ', err));
const app = (0, express_1.default)();
exports.app = app;
const server = http.createServer(app);
exports.server = server;
const socket = new socket_io_1.Server(server, { cors: { origin: '*' } });
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
socket.on('connection', socket => {
    console.log('A user connected ->', socket.id);
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
process.on('SIGINT', () => {
    server.close(() => {
        mongoose_1.default.disconnect();
        console.log('Server closed.');
        process.exit(0);
    });
    socket.close();
});
app.use((0, cors_1.default)({ credentials: true, origin: [CLIENT_URL] }));
app.use(express_1.default.json());
app.use('/user', userRoutes_1.default);
app.get('/', (req, res) => {
    res.send('hello world');
    res.end();
});
