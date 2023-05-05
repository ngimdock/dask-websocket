import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server  🐻 🐼');
});

const hello = (name: string) => {
  console.log('je suis', name);
};

app.listen(port, () => {
  console.log(`️🔥 [server]: Server is running at http://localhost:${port}`);
});
