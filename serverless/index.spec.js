const request = require("supertest")
const app = require('./server');

describe('Receive all users from DB', () => {
    it('should get all users', async () =>{
        const res = await request(app)
        .get('/')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('Usuarios')
    })
})

describe('Receive informed user from DB', () => {
    it('should get informed user', async () =>{
        const resPost = await request(app)
        .post('/cadastroUsuario')
        .send({
            Nome: "Ademir Santos",
            Idade: 41,
            Cargo: "Gerente Administrativo"
        });
        expect(resPost.statusCode).toEqual(200)
        expect(resPost.body).toHaveProperty('message')
        let Id = resPost.body.info[0].Id;
        const resGet = await request(app)
        .get('/'+Id)
        expect(resGet.statusCode).toEqual(200)
        expect(resGet.body).toHaveProperty('Usuario')
        const resDel = await request(app)
        .delete('/deleteUsuario/'+Id)
        expect(resDel.statusCode).toEqual(200)
        expect(resDel.body).toHaveProperty('message')
    })
})

describe('Register user in DB', () => {
    it('should post informed user', async () =>{
        const res = await request(app)
        .post('/cadastroUsuario')
        .send({
            Nome: "Ademir Santos",
            Idade: 41,
            Cargo: "Gerente Administrativo"
        })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message')
        let Id = res.body.info[0].Id;
        const resDel = await request(app)
        .delete('/deleteUsuario/'+Id)
        expect(resDel.statusCode).toEqual(200)
        expect(resDel.body).toHaveProperty('message')
    })
})

describe('Alter user in DB', () => {
    it('should alter informed user', async () =>{
        const resPost = await request(app)
        .post('/cadastroUsuario')
        .send({
            Nome: "Ademir Santos",
            Idade: 41,
            Cargo: "Gerente Administrativo"
        });
        expect(resPost.statusCode).toEqual(200)
        expect(resPost.body).toHaveProperty('message')
        let Id = resPost.body.info[0].Id;

        const resAlt = await request(app)
        .put('/alteraUsuario')
        .send({
            Id: Id,
            Nome: "Ademir Santos Valter",
            Idade: 45,
            Cargo: "Gerente Geral"
        });
        expect(resAlt.statusCode).toEqual(200)
        expect(resAlt.body).toHaveProperty('message')
        const resDel = await request(app)
        .delete('/deleteUsuario/'+Id)
        expect(resDel.statusCode).toEqual(200)
        expect(resDel.body).toHaveProperty('message')
        const resGet = await request(app)
        .get('/'+Id)
        expect(resGet.statusCode).toEqual(404)
        expect(resGet.body).toHaveProperty('message')
    })
})

describe('Delete user in DB', () => {
    it('should delete informed user', async () =>{
        const resPost = await request(app)
        .post('/cadastroUsuario')
        .send({
            Nome: "Ademir Santos",
            Idade: 41,
            Cargo: "Gerente Administrativo"
        });
        expect(resPost.statusCode).toEqual(200)
        expect(resPost.body).toHaveProperty('message')
        let Id = resPost.body.info[0].Id;
        const resDel = await request(app)
        .delete('/deleteUsuario/'+Id)
        expect(resDel.statusCode).toEqual(200)
        expect(resDel.body).toHaveProperty('message')
        const resGet = await request(app)
        .get('/'+Id)
        expect(resGet.statusCode).toEqual(404)
        expect(resGet.body).toHaveProperty('message')
    })
})