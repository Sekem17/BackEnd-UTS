const mongoose = require('mongoose');

const spellSchema = new mongoose.Schema({
  name: String,
  level: Number,
  school: String,
  casting_time: String,
  range: String,
  components: [String],
  duration: String,
  description: String,
});

module.exports = mongoose.model('Spell', spellSchema);