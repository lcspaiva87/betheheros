const request = require ('supertest');
const app =require ('../../src/app');
const connection = require('../../src/database/connection')
describe('ONG',()=>{
    beforeEach(async ()=>{
      await  connection.migrate.latest();
    });
    afterAll(async ( )=>{
        await connection.rollback();
        await connection.latest();
    });
    it('should be able to create a new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            nome: "IFCE22",
            email: "IFCE@gmail.com",
            whatsapp: "9986629122",
            city: "Fortaleza",
            uf: "CE"
        });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    });
});