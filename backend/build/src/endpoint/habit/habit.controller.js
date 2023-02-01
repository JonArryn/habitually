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
exports.deleteHabit = exports.updateHabit = exports.createHabit = exports.getHabitById = exports.getAllHabits = void 0;
const HabitService = __importStar(require("./habit.model"));
const responseObject_1 = require("../../helper/responseObject");
const stringToNumber_1 = __importDefault(require("../../helper/stringToNumber"));
// GET: all habits
const getAllHabits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const habits = yield HabitService.getAllHabits();
        res.status(200).json((0, responseObject_1.successResponse)(habits));
    }
    catch (error) {
        res
            .status(400)
            .json((0, responseObject_1.failureResponse)(error instanceof Error && error.message));
    }
});
exports.getAllHabits = getAllHabits;
// GET: habit by id
const getHabitById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, stringToNumber_1.default)(req.params.id);
    try {
        const habit = yield HabitService.getHabitById(id);
        res.status(200).json((0, responseObject_1.successResponse)(habit));
    }
    catch (error) {
        res
            .status(404)
            .json((0, responseObject_1.failureResponse)(error instanceof Error && error.message));
    }
});
exports.getHabitById = getHabitById;
// POST: create new habit
// PARAMS: title, description
const createHabit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const habit = req.body;
        const newHabit = yield HabitService.createHabit(habit);
        res.status(201).json((0, responseObject_1.successResponse)(newHabit));
    }
    catch (error) {
        res
            .status(400)
            .json((0, responseObject_1.failureResponse)(error instanceof Error && error.message));
    }
});
exports.createHabit = createHabit;
// PUT: update habit
// PARAMS: id
const updateHabit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, stringToNumber_1.default)(req.params.id);
    try {
        const newHabitData = req.body;
        const updatedHabit = yield HabitService.updateHabit(newHabitData, id);
        res.status(200).json((0, responseObject_1.successResponse)(updatedHabit));
    }
    catch (error) {
        res
            .status(400)
            .json((0, responseObject_1.failureResponse)(error instanceof Error && error.message));
    }
});
exports.updateHabit = updateHabit;
const deleteHabit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, stringToNumber_1.default)(req.params.id);
    try {
        yield HabitService.deleteHabit(id);
        res.status(204).json((0, responseObject_1.successResponse)('Habit deleted successfully'));
    }
    catch (error) {
        res
            .status(400)
            .json((0, responseObject_1.failureResponse)(error instanceof Error && error.message));
    }
});
exports.deleteHabit = deleteHabit;
//# sourceMappingURL=habit.controller.js.map