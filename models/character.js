const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  race: { type: String, required: true },
  class: { type: String, required: true },
  level: { type: Number, required: true, min: 1 },
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number,
}, { timestamps: true });

module.exports = mongoose.model('Character', characterSchema);
