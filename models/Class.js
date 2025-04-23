const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Nama class wajib diisi']
    },
    hp: {
        type: Number,
        min: [0, 'HP class wajib diisi']
    }, 
    defense: {
        type: Number,
        min: [0, 'nilai defense wajib diisi']
    },
    speed: {
        type: Number,
        min: [0, 'nilai speed wajib diisi']
    },
    skill: {
        type: String,
        maxlength: [100, 'Skill class wajib diisi']
    },
    passive: {
        type: String,
        maxlength: [100, 'Pasif class wajib diisi']
    },
    type: {
        type: String,
        maxlength: [100, 'Tipe class wajib diisi(Basic Class, Intermediate Class, Advanced Class)']
    },
    description: {
        type: String,
        maxlength: [500, 'Deskripsi spell maksimal 500 karakter']
    },
});

module.exports = mongoose.model('Class', classSchema); 