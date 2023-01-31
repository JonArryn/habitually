"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_server_1 = __importDefault(require(".././utils/db.server"));
const checkId = (tableName, id) => {
    const model = db_server_1.default[tableName];
    return model.findUnique({
        where: {
            id: id,
        },
    });
};
//# sourceMappingURL=checkId.js.map