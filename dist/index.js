import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server  🐻 🐼');
});
const hello = (name) => {
    console.log('je suis', name);
};
app.listen(port, () => {
    console.log(`️🔥 [server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map