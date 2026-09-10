import * as usuarioService from '../services/usuarioService.js';
import Joi from 'joi';

export const usuarioCreateSchema = Joi.object({
    cpf: Joi.string().length(11).required(),
    nome: Joi.string().required().max(100),
    endereco: Joi.string().required().max(100),
    bairro: Joi.string().allow('').max(30),
    cidade: Joi.string().allow('').max(30),
    cep: Joi.string().required().max(8),
    telefone: Joi.string().required(),
    email: Joi.string().required().email().max(50),
    senha: Joi.string().required().max(100),
    tipo: Joi.string().required().max(10),
});

export const usuarioUpdateSchema = Joi.object({
nome: Joi.string().max(100),
endereco: Joi.string().max(100),
bairro: Joi.string().allow().max(30),
cidade: Joi.string().allow().max(30),
cep: Joi.string().max(8),
telefone: Joi.string(),
email: Joi.string().email().max(50),
senha: Joi.string().max(100),
}).min(1);

export const listarUsuario = async (req,res) => {
    try { 
        const {cpf, nome, email} = req.query;
        const usuarios = await usuarioService.findAll(cpf, nome, email ,res.json(usuarios));
    } catch (err) { 
        console.error('Erro ao buscar o Usuario', err)
        res.status(500).json({error: `Erro Interno do Serviddor`});
    }
};