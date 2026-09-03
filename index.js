// import { mensagem } from './aula.js';
// import chalk from 'chalk';
// import { pedirPizza } from './fazerpizza.js';

// mensagem('Sté')

// console.log(chalk.red('Hello world!'));

// pizzas.forEach(element => {
//     console.log(`${element.id} - ${element.sabor} = ${chalk.red (element.preco)}`)
// });

// pedirPizza()

import 'dotenv/config';
import express from 'express';
import { pizzas } from './cardapio.js';

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: "Bem Vindo á API da Pizzaria Senac" });
});

app.get('/pizzas', (req, res) => {
    res.json(pizzas);
})

app.get('/pizzas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pizza = pizzas.find(p => p.id === id);

    if (!pizza) {
        return res.status(404).json({ error: 'Pizza não encontrada' });

    }
    res.json(pizza);
});

const PORTA = process.env.PORT

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta  ${PORTA}`)
});



