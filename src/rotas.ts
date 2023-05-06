import express, { Router } from 'express';
import { cadastrarUsuario, login, inspecionarUsuario, editarUsuario, listarCategorias, cadastraCliente, AlteraCadastraCliente, listarClientes, detalhaCliente } from './controladores/controladores';
import { emailExiste, usuarioLogado, validarCamposBody, validarLogin, cpfValido, validaAlteracaoCliente, cpfExistente } from './middleware/validacoes'
import { schemaCadastroUsuario, schemaLogin, schemaCadastroCliente } from './middleware/schemasJoi'
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger.json';

const rotas: Router = express.Router();

rotas.post('/usuario', validarCamposBody(schemaCadastroUsuario), emailExiste(false, 'usuarios'), cadastrarUsuario);
rotas.post('/login', emailExiste(true, 'usuarios'), validarLogin(schemaLogin), login);
rotas.get('/categoria', listarCategorias)
rotas.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
rotas.use(usuarioLogado)
rotas.get('/usuario', inspecionarUsuario)
rotas.put('/usuario', validarCamposBody(schemaCadastroUsuario), emailExiste(false, 'usuarios'), editarUsuario)
rotas.post('/cliente', validarCamposBody(schemaCadastroCliente), emailExiste(false, 'clientes'), cpfValido, cpfExistente(false), cadastraCliente)
rotas.put('/cliente/:id', validarCamposBody(schemaCadastroCliente), cpfValido, validaAlteracaoCliente, AlteraCadastraCliente)
rotas.get('/cliente', listarClientes)
rotas.get('/cliente/:id', detalhaCliente)

export default rotas;