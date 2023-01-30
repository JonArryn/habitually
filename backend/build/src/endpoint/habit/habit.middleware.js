"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHabitBody = void 0;
const express_validator_1 = require("express-validator");
const validateHabitBody = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    (0, express_validator_1.body)('title').isString(), (0, express_validator_1.body)('description').isString();
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
exports.validateHabitBody = validateHabitBody;
//# sourceMappingURL=habit.middleware.js.map