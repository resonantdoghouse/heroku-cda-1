import express from 'express';
const app = express();

const PORT = process.env.PORT || 5050;

console.log(process.env);

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Express App 🐱</h1>`);
});

app.listen(PORT, () => {
   console.log(`app running on port ${PORT}`)
});