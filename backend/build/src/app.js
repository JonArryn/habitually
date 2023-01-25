"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express in typescript file
const express_1 = __importDefault(require("express"));
// Initialize the express engine
const app = (0, express_1.default)();
// Take a port 8000 for running server.
const port = 8000;
// Handling '/' Request
app.get('/', (req, res) => {
    res.send('TypeScript With Express');
});
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
module.exports = app;
//# sourceMappingURL=app.js.map