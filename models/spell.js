const mongoose = require('mongoose');

const spellSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Nama spell wajib diisi']
    },
    element: {
        type: String,
        required: [true, 'Element spell wajib diisi']
    }, 
    target_count: {
        type: String,
        required: [true, '(Misalnya Single target / multi target) target spell wajib diisi']
    },
    rarity: {
        type: String,
        enum: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'],
        required: [true, 'Rarity spell wajib diisi']
    },
    damage: {
        type: Number,
        min: [0, 'Attack minimal = 1']
    },
    effect: {
        type: String,
        required: [true, 'Buff/efek spell wajib diisi']
    },
    description: {
        type: String,
        maxlength: [500, 'Deskripsi spell maksimal 500 karakter']
    },
});

module.exports = mongoose.model('Spell', spellSchema);