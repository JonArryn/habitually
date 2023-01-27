"use strict";
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
const db_server_1 = __importDefault(require("../../utils/db.server"));
const getAllHabits = () => __awaiter(void 0, void 0, void 0, function* () {
    return db_server_1.default.habit.findMany({});
});
exports.getAllHabits = getAllHabits;
const getHabitById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return db_server_1.default.habit.findUnique({
        where: {
            id: id,
        },
    });
});
exports.getHabitById = getHabitById;
const createHabit = (habit) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = habit;
    return yield db_server_1.default.habit.create({
        data: {
            title: title,
            description: description,
            user_id: 1,
        },
    });
});
exports.createHabit = createHabit;
const updateHabit = (habit, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = habit;
    return yield db_server_1.default.habit.update({
        where: { id: id },
        data: { title: title, description: description },
    });
});
exports.updateHabit = updateHabit;
const deleteHabit = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_server_1.default.habit.delete({
        where: { id: id },
    });
});
exports.deleteHabit = deleteHabit;
//# sourceMappingURL=habit.controller.js.map