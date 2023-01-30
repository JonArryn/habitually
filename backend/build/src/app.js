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
const dotenv = __importStar(require("dotenv"));
// Import the express in typescript file
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// initialize .env file configuration
dotenv.config();
// Take a port 8000 for running server.
const port = process.env.PORT;
// Initialize the express engine
const app = (0, express_1.default)();
// > ROUTERS
const habit_router_1 = __importDefault(require("./endpoint/habit/habit.router"));
// > MIDDLEWARE
// logging
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
// cors?
app.use((0, cors_1.default)({
    origin: 'http://localhost:8000',
}));
// body parser middleware (called by app.use())
app.use(express_1.default.json());
// appends time of request to request object
// revisit this because appending items to the request object needs to be typed, however there might be a better way of supplying request times with each request https://stackoverflow.com/questions/37377731/extend-express-request-object-using-typescript
/* app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
}); */
// > ROUTES (Still Middleware)
app.use('/api/habit', habit_router_1.default);
// >  SERVER
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
// Handling '/' Request
app.get('/', (req, res) => {
    res.send('TypeScript With Express');
});
module.exports = app;
//# sourceMappingURL=app.js.map