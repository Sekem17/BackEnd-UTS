const express=require('express');
const router=express.Router();
const Armor=require('../models/Armor');

router.get('/',async(req,res)=>{
try{
    const armors=await Armor.find();
    res.json(armors);
}catch(err){
    res.status(500).json({message:err.message});
}
});

router.get('/:id', async (req, res) => {
try {
  const armor = await Armor.findById(req.params.id);
  if (!armor) {
    return res.status(404).json({ message: 'armor tidak ditemukan' });
  }
  res.json(armor);
} catch (err) {
  res.status(500).json({ message: err.message });
}
});

router.post('/', async (req, res) => {
const armor = new Armor(req.body);
try {
    const saved = await armor.save();
    res.status(201).json(saved);
} catch (err) {
    res.status(400).json({ message: err.message });
}
});

router.put('/:id', async (req, res) => {
    try {
        const updated = await Armor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updated) {
            return res.status(404).json({ message: 'armor tidak ditemukan' });
        }
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message});
        }
});

router.delete('/:id', async (req, res) => {
try {
    const deleted = await Armor.findByIdAndDelete(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: 'armor tidak ditemukan' });
    }
    res.json({ message: 'armor berhasil dihapus' });
} catch (err) {
    res.status(500).json({ message: err.message});
}
});

module.exports = router;

