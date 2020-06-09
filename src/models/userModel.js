const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    login: String,
    name: String,
    bio: String,
    avatar_url: String,
    company: String,
    public_repos: Number,
    followers: Number,
    sexo: String,
    experiencia: String,
    linguagem: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);