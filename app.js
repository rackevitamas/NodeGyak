import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());

app.get("/hello", (req, res, next) => {
    res.send("Hello user!");
})

app.get("/greet", (req, res, next) => {
    res.send("Hi there!");
})

app.get("/ciao", (req, res, next) => {
    res.send("Ciao on my page!");
})

const root = path.join(path.dirname(fileURLToPath(import.meta.url)))

app.get("/", (req, res, next) => {
    res.sendFile(path.join(root, 'index.html'));
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
});