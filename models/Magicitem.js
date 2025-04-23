const mongoose=require('mongoose');

const magicitemSchema = new mongoose.Schema({
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
    ability: {
        type: String,
        required: [true, 'Ability wajib diisi']
    },
    description: {
        type: String,
        maxlength: [500, 'Deskripsi maksimal 500 karakter']
    }
});

module.exports=mongoose.model("Magicitem",magicitemSchema);