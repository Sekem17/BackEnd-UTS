const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  speed: { type: Number, required: true },
  ability_bonuses: {
    type: Map,
    of: Number,
    default: {}
  },
  size: { type: String, enum: ['Small', 'Medium', 'Large'], default: 'Medium' },
  languages: {
    type: [String],
    default: []
  },
  traits: {
    type: [String],
    default: []
  }
}, { timestamps: true });

module.exports = mongoose.model('Race', raceSchema);
