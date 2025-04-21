const mongoose = require('mongoose');

const combatSchema = new mongoose.Schema({
  name: { type: String, required: true },
  participants: [{
    name: { type: String, required: true },
    type: { type: String, enum: ['player', 'monster'], required: true },
    initiative: { type: Number, required: true },
    hp: { type: Number, required: true }
  }],
  round: { type: Number, default: 1 },
  active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Combat', combatSchema);
