// > this utility establishes connection to the database and ensures to reuse connections. This was found in a tutorial video but I need to revisit this to understand more about maintaining connections to the DB or a pool of connections.

import { PrismaClient } from '@prisma/client';

declare global {
  var __database: PrismaClient | undefined;
}

if (!global.__database) {
  global.__database = new PrismaClient();
}

const database: PrismaClient = global.__database;

export { database as default };
