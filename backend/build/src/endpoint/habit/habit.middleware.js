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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkId = exports.validateHabitBody = void 0;
const express_validator_1 = require("express-validator");
const HabitService = __importStar(require("./habit.model"));
const responseObject_1 = require("../../helper/responseObject");
const validateHabitBody = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    (0, express_validator_1.body)('title').isString(), (0, express_validator_1.body)('description').isString();
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
exports.validateHabitBody = validateHabitBody;
const checkId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        const habit = yield HabitService.getHabitById(id);
        if (!habit) {
            return res
                .status(400)
                .json((0, responseObject_1.failureResponse)('record not found by the provided ID'));
        }
    }
    catch (error) {
        res.status(500).json((0, responseObject_1.failureResponse)(error.message));
    }
    next();
});
exports.checkId = checkId;
//# sourceMappingURL=habit.middleware.js.map