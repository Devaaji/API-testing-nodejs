import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('API Testing Updated');
})


app.listen(process.env.PORT, () => {
    console.log(`Connecting on port ${process.env.PORT}`);
})