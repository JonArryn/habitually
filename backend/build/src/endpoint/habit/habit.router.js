"use strict";
// this needs to be refactored to separate the router from the req,res functions, and the current habit.controller file needs to be renamed to habit.model
// habit.types is not being used yet because i am not selecting fields when returning data in responses but creating custom types instead of using prisma generated types is useful if you intend to only return certain data in response, however i'd like to look at extending the prisma types rather than creating them from scratch
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const HabitService = __importStar(require("./habit.controller"));
const habitRouter = express_1.default.Router();
exports.default = habitRouter;
// GET: all habits
habitRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const habits = yield HabitService.getAllHabits();
        return res.status(200).json(habits);
    }
    catch (error) {
        return res.status(400).json(error.message);
    }
}));
// GET: habit by id
habitRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    try {
        const habit = yield HabitService.getHabitById(id);
        if (habit) {
            return res.status(200).json(habit);
        }
        else {
            return res.status(404).json('No habit found by the provided id');
        }
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}));
// POST: create new habit
// PARAMS: title, description
habitRouter.post('/', (0, express_validator_1.body)('title').isString(), (0, express_validator_1.body)('description').isString(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const habit = req.body;
        const newHabit = yield HabitService.createHabit(habit);
        return res.status(201).json(newHabit);
    }
    catch (error) {
        return res.status(400).json(error.message);
    }
}));
// PUT: update habit
// PARAMS: id
habitRouter.put('/:id', (0, express_validator_1.body)('title').isString(), (0, express_validator_1.body)('description').isString(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const id = parseInt((_a = req.params) === null || _a === void 0 ? void 0 : _a.id, 10);
    try {
        const habit = req.body;
        const updatedHabit = yield HabitService.updateHabit(habit, id);
        return res.status(200).json(updatedHabit);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}));
//# sourceMappingURL=habit.router.js.map