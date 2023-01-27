"use strict";
// > this utility establishes connection to the database and ensures to reuse connections. This was found in a tutorial video but I need to revisit this to understand more about maintaining connections to the DB or a pool of connections.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const client_1 = require("@prisma/client");
let db;
exports.default = db;
if (!global.__db) {
    global.__db = new client_1.PrismaClient();
}
exports.default = db = global.__db;
//# sourceMappingURL=db.server.js.map