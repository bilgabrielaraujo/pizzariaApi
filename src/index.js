// import { mensagem } from './aula.js';
// import chalk from 'chalk';
// import { pedirPizza } from './fazerpizza.js';
// mensagem('Sté')
// console.log(chalk.red('Hello world!'));
// pizzas.forEach(element => {
//     console.log(`${element.id} - ${element.sabor} = ${chalk.red (element.preco)}`)
// });
// pedirPizza()
// import { pizzas } from '../cardapio.js';

// app.use(express.json())
// app.get('/', (req, res) => {
//     res.json({ message: "Bem Vindo á API da Pizzaria Senac" });
// });
// app.get('/pizzas', (req, res) => {
//     res.json(pizzas);
// })
// app.get('/pizzas/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const pizza = pizzas.find(p => p.id === id);
//     if (!pizza) {
//         return res.status(404).json({ error: 'Pizza não encontrada' });
//     }
//     res.json(pizza);
// });
// const PORTA = process.env.PORT
// app.listen(PORTA, () => {
//     console.log(`Servidor rodando na porta  ${PORTA}`)
// });



import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// import authRoutes from './routes/authRoutes.js';
// import usuarioRoutes from './routes/usuarioRoutes.js';
// import produtoRoutes from './routes/produtoRoutes.js';
// import pedidoRoutes from './routes/pedidoRoutes.js';
// import { ClientRequest, METHODS } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
    origin: ['http://localhost:3333', 'https://meudominio.com'],
    methods: 'GET,POST,PUT,PATCH,DELETE',
    credentials: true
};

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'home.html'));
});

const apiPrefix = '/api';

// app.use(`${apiPrefix}/usuario` , usuarioRoutes);
// app.use(`${apiPrefix}/login` , authRoutes);
// app.use(`${apiPrefix}/produtos`, produtoRoutes);
// app.use(`${apiPrefix}/pedidos`, pedidoRoutes);

app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).send('Algo deu errado no servidor!');
});

const PORTA = process.env.PORT
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta  ${PORTA}`)
});