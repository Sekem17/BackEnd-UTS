const mongoose = require('mongoose');

const monsterSchema = new mongoose.Schema({
    name: String,
    type: String,
    rarity: String,
    health: Number,
    defense: Number,
    speed: Number,
    challenge_rating: Number,
    special_ability: String,
    description: String
});

module.exports = mongoose.model('Monster', monsterSchema);