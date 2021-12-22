const express = require('express');
const router = express();

const usuarios = require('../src/controller/users')

router.get('/', usuarios.getUsers);
router.get('/:id', usuarios.getUser);
router.post('/cadastroUsuario', usuarios.cadUser);
router.put('/alteraUsuario', usuarios.altUser);
router.delete('/deleteUsuario/:id', usuarios.delUser);

module.exports = {
    routes: router
}