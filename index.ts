//Http server Bun
// const server = Bun.serve({
//   port: 3000,
//   fetch(req) {
//     return new Response("Bun!");
//   },
// });s
// console.log(`Listening on http://localhost:${server.port} ...`);

import express from 'express';
import { sum } from './utils/sum';
const rs = sum(1, 2);
console.log(rs);
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
