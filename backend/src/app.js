const express  = require('express');
const cors   = require('cors');
const { errors}= require('celebrate');
const routes   = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * MEtodos HTTPS
 * GET Busca/listar informação do back-end
 * POST:Cria uma infomação no back-end
 * PUT:Alterar uma infomrção no back-and
 * DELETE:Deleta uma informção no back-and
 */

 /**
  * Tipos de parametros:
  * 
  * Query params:Parametros nomeados enviados na rota apos'?'(filtros,paginação)
  * Route params:Parametros utiliozados para indenficar recursos
  * Request Body:Copor da requisição, ultilizando para criar ou alterar recursos
  */

  /**
   * Banco de dados
   */
  /**
   * Driver:
   * Query Builder:table('users).select('*').where()
   */

module.exports=app;