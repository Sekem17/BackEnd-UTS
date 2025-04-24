    const express=require('express');
    const router=express.Router();
    const Magicitem = require('../models/Magicitem');

    router.get('/',async(req,res)=>{
    try{
        const magicitems=await Magicitem.find();
        res.json(magicitems);
    }catch(err){
        res.status(500).json({message:err.message});
    }
    });

    router.get('/:id', async (req, res) => {
    try {
      const magicitem = await Magicitem.findById(req.params.id);
      if (!magicitem) {
        return res.status(404).json({ message: 'magic item tidak ditemukan' });
      }
      res.json(magicitem);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
    });

    router.post('/', async (req, res) => {
    const magicitem = new Magicitem(req.body);
    try {
        const saved = await magicitem.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    });

    router.put('/:id', async (req, res) => {
        try {
            const updated = await Magicitem.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );
            if (!updated) {
                return res.status(404).json({ message: 'magic item tidak ditemukan' });
            }
            res.json(updated);
        } catch (err) {
            res.status(400).json({ message: err.message});
            }
    });

    router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Magicitem.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'armor tidak ditemukan' });
        }
        res.json({ message: 'magic item berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
    });
  
  module.exports = router;

