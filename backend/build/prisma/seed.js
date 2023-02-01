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
const database_server_1 = __importDefault(require("../src/utils/database.server"));
const getUsers = () => {
    return [
        { id: 1, username: 'bobVila' },
        { id: 2, username: 'plainJane' },
        { id: 3, username: 'johnDoe' },
    ];
};
const getHabits = () => {
    return [
        {
            title: 'Meditate',
            description: 'Meditate for 30 minutes each morning',
        },
        {
            title: 'Clip Nails',
            description: 'Clip nails once per week',
        },
        {
            title: 'Clip Nails',
            description: 'Clip nails once per week',
        },
    ];
};
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Promise.all(getUsers().map((user) => {
        return database_server_1.default.user.create({
            data: {
                username: user.username,
            },
        });
    }));
    yield Promise.all(getHabits().map((habit) => {
        const { title, description } = habit;
        return database_server_1.default.habit.create({
            data: {
                title: title,
                description: description,
                user_id: 1,
            },
        });
    }));
});
seed();
//# sourceMappingURL=seed.js.map