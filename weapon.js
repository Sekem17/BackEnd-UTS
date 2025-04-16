const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
  name: { type: String, required: true },
  attackBonus: { type: Number, required: true },
  type: { type: String, required: true } // sword, axe, bow, etc
});

module.exports = mongoose.model('Weapon', weaponSchema);
