const express = require('express');
const dotenv = require('dotenv');
const env = process.argv[2]|| "development";
dotenv.config({ path: `.env.${env}` });

const app = express();
const PORT = process.env.PORT;
const APP = process.env.APP;

app.get('/', (req,res) => {
res.send('Hello World from express from ' + APP);
});

app.get('/method1', (req,res) => {
res.send('Hello world from express from method1');
});
app.listen(PORT);
