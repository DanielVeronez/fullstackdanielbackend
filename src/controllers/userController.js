const mongoose = require('mongoose');
const axios = require('axios');
const User = mongoose.model('User');

module.exports = {
    async persisteUser(req, res) {
        const { userGit, sexo, linguagem, experiencia } = req.body;
        //Usar a crase para fazer esta linha abaixo
        const response = await axios.get(`https://api.github.com/users/${userGit}`);
        //descontrução de variável
        const {
            login,
            name,
            avatar_url,
            company,
            public_repos,
            followers,
            bio,
        } = response.data;

        const payload = await User.create({
            login,
            name,
            avatar_url,
            company,
            public_repos,
            followers,
            bio,
            sexo,
            experiencia,
            linguagem
        });
        //req.io.emit('newuser');
        res.json(payload);
    },
    async listUser(req, res) {
        const response = await User.find()
        res.json(response);
    },
    async getUserGit(req, res) {
        const response = await axios.get('https://api.github.com/users/leonardogandrade')
        res.json(response.data);
    },
    //usuários antes de 2020
    async listDate(req, res) {
        const response = await axios.get('https://api.github.com/users/leonardogandrade')
        const { login, created_at } = response.data;
        const created_at_date = new Date(Date.parse(created_at));

        if (created_at.getFullYear() < 2020) {
            res.json("Usuário antigo");
        } else {
            res.json("Usuário novo");
        }
    },
    async login(req, res) {
        const username = await req.params.username;
        const validation = await User.find({ login: username });
        if (validation.length === 0) {
            res.json({ 'msg': 0 })
        } else {
            res.json({ 'msg': 1 })
        }
    },
    async detail(req,res){
        const userId = await req.params.id;
        const detail = await User.findById(userId);
        res.json(detail);
    }
}