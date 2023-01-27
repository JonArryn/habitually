// > this utility establishes connection to the database and ensures to reuse connections. This was found in a tutorial video but I need to revisit this to understand more about maintaining connections to the DB or a pool of connections.

import { PrismaClient } from '@prisma/client';

let db: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

if (!global.__db) {
  global.__db = new PrismaClient();
}

db = global.__db;

export { db as default };
