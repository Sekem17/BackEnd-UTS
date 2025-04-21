const express = require('express');
const router = express.Router();
const Combat = require('../models/combat');

router.get('/', async (req, res) => {
  const combats = await Combat.find();
  res.json(combats);
});

router.get('/:id', async (req, res) => {
  const combat = await Combat.findById(req.params.id);
  if (!combat) return res.status(404).json({ error: 'Combat not found' });
  res.json(combat);
});

router.post('/', async (req, res) => {
  try {
    const combat = new Combat(req.body);
    await combat.save();
    res.status(201).json(combat);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const combat = await Combat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!combat) return res.status(404).json({ error: 'Combat not found' });
    res.json(combat);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const combat = await Combat.findByIdAndDelete(req.params.id);
  if (!combat) return res.status(404).json({ error: 'Combat not found' });
  res.json({ message: 'Combat deleted' });
});

module.exports = router;
