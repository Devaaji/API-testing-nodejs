import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('API Testing');
})


app.listen(process.env.PORT, () => {
    console.log(`Connecting on port ${process.env.PORT}`);
})