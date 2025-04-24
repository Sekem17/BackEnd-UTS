const mongoose=require('mongoose');

const armorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nama wajib diisi']
    },
    type: {
        type: String,
        required: [true, 'Tipe wajib diisi']
    },
    rarity: {
        type: String,
        enum: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'],
        required: [true, 'Rarity wajib diisi']
    },
    category: {
        type: String,
        min: 1 ['Health minimal = 1']
    },
    defense: {
        type: Number,
        min: 1 ['Defense minimal = 1'],
    },
    ability: {
        type: String,
        required: [true, 'Ability wajib diisi']
    }
});

module.exports=mongoose.model("Armor",armorSchema);