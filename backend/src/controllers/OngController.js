const generateUniqueId = require('../utils/generateUniqueId')
const crypto = require ('crypto');
const connection = require('../database/connection');

 module.exports ={
  async index(request, response){
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
  },

    async create(request, response){
        const { nome, email, whatsapp, city, uf } = request.body;
        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
      }
 };
 