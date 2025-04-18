const mongoose = require('mongoose');

const monsterSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Nama monster wajib diisi']
    },
    type: {
        type: String,
        required: [true, 'Tipe monster wajib diisi']
    },
    rarity: {
        type: String,
        enum: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'],
        required: [true, 'Rarity monster wajib diisi']
    },
    health: {
        type: Number,
        min: [1, 'Health minimal monster = 1']
    },
    defense: {
        type: Number,
        min: [1, 'Defemse minimal monster = 1'],
    },
    speed: {
        type: Number,
        min: [1, 'Speed minimal monster = 1'],
    },
    challenge_rating: {
        type: Number,
        min: [0, 'Challenge rating monster tidak boleh negatif']
    },
    special_ability: {
        type: String,
        required: [true, 'Special ability wajib diisi']
    },
    description: {
        type: String,
        maxlength: [500, 'Deskripsi monster maksimal 500 karakter']
    },
    num: {
        type: Number,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Monster', monsterSchema);