import express from 'express';

import proizvodiRouter from './routes/proizvodi.js';

import narudzbeRouter from './routes/narudzbe.js';

import { Proizvod, proizvodi } from './data.js';

const app = express();

app.use(express.json());

app.use('/proizvodi', proizvodiRouter);
app.use('/narudzbe', narudzbeRouter);


const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Webshop API');
});

app.listen(PORT, error => {
    if (error) {
        console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
    } else {
        console.log(`Server dela na http://localhost:${PORT}`);
            }
});