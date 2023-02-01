"use strict";
// > this utility establishes connection to the database and ensures to reuse connections. This was found in a tutorial video but I need to revisit this to understand more about maintaining connections to the DB or a pool of connections.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const client_1 = require("@prisma/client");
if (!global.__database) {
    global.__database = new client_1.PrismaClient();
}
const database = global.__database;
exports.default = database;
//# sourceMappingURL=database.server.js.map