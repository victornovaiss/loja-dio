import { Router } from 'express';
import { openDb } from './db.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/produtos', async (req, res) => {
    const db = await openDb();
    const produtos = await db.all('SELECT * FROM produtos;');

    res.json(produtos).status(200);
})

router.post('/produtos', async (req, res) => {

    const db = await openDb();

    const request = req.body;
    const result = await db.run(`INSERT INTO produtos (nome, valor) VALUES (?, ?)`, [request.nome, request.valor]);

    res.status(201).json({request,result});

})

export default router;