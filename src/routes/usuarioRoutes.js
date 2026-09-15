import express from 'express';
import * as usuarioController from '../controllers/usuarioController.js';
import validate from '../middlewares/validate.js';

import { usuarioCreateSchema, usuarioUpdateSchema } from '../controllers/usuarioController.js';

//import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();
router.post('/', validate(usuarioCreateSchema), usuarioController.adicionarUsuario);

//router.use(authMiddleware);
router.get('/', usuarioController.listarUsuario);
router.put('/:cpf', validate(usuarioUpdateSchema), usuarioController.atualizarUsuario);
router.delete('/:cpf', usuarioController.deletarUsuario);
export default router;
