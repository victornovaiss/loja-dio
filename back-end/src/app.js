import express, { json } from 'express';
import cors from 'cors';
import router from './routes.js';

const app = express();

app.listen(5000,()=>{
    console.log('Servidor rodando na porta 5000');
});

app.use(cors());
app.use(json());
app.use(router);