const express = require('express');
const router = express.Router();
const Character = require('../models/character');

router.get('/', async (req, res) => {
  const characters = await Character.find();
  res.json(characters);
});

router.get('/:id', async (req, res) => {
  const character = await Character.findById(req.params.id);
  if (!character) return res.status(404).json({ message: 'Character not found' });
  res.json(character);
});
r
router.post('/', async (req, res) => {
  try {
    const newCharacter = new Character(req.body);
    await newCharacter.save();
    res.status(201).json(newCharacter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Character not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const deleted = await Character.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Character not found' });
  res.json({ message: 'Character deleted' });
});

module.exports = router;
