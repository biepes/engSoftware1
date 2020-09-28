const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nome: String,
    cpf: Number,
    cep: Number,
    email: String,
    username: String,
    senha: String,
    condicao: Number
});

module.exports = mongoose.model('Usuario', UserSchema);