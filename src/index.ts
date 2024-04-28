import express from 'express';
import { Server } from "./server";

// INITIALIZE APP
const app = express();
const server = new Server(app);

// LISTEN TO PORT
server.listen(8080);

// CONNECT DATABASE

// ROUTES
app.get('/', (req, res, next) => {
  res.status(200).send('Express + TS 🚀');
});
