const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Nama weapon wajib diisi']
    },
    type: {
        type: String,
        required: [true, 'Tipe weapon wajib diisi']
    },
    rarity: {
        type: String,
        enum: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'],
        required: [true, 'Rarity weapon wajib diisi']
    },
    damage: {
        type: Number,
        min: [1, 'Attack minimal = 1']
    },
    ability: {
        type: String,
        required: [true, 'Ability weapon wajib diisi']
    },
});

module.exports = mongoose.model('Weapon', weaponSchema);
