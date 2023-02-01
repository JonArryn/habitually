import * as dotenv from 'dotenv';
// Import the express in typescript file
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// initialize .env file configuration
dotenv.config();

// Take a port 8000 for running server.
const port = process.env.PORT;

// Initialize the express engine
const app = express();

// > ROUTERS

import habitRouter from './endpoint/habit/habit.router';

// > MIDDLEWARE

// logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// cors?
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
// body parser middleware (called by app.use())
app.use(express.json());

// appends time of request to request object
// revisit this because appending items to the request object needs to be typed, however there might be a better way of supplying request times with each request https://stackoverflow.com/questions/37377731/extend-express-request-object-using-typescript
/* app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
}); */

// > ROUTES (Still Middleware)

app.use('/api/v1/habit', habitRouter);

// >  SERVER
app.listen(port, () => {
  console.log(`TypeScript with Express
         http://localhost:${port}/`);
});

// Handling '/' Request
app.get('/', (req, res) => {
  res.send('TypeScript With Express');
});
