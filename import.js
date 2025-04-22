const mongoose = require('mongoose');
const fs = require('fs');
const Spell = require('./models/Spell');

mongoose.connect('mongodb+srv://Samuel:popapopi17@contohcluster.27tfw.mongodb.net/?retryWrites=true&w=majority&appName=contohCluster', {
    useNewUrlParser: true,
})
.then(async () => {
    console.log('Connected to MongoDB');
    
    const data = fs.readFileSync('./data/spells.json');
    const spells = JSON.parse(data);

    await Spell.insertMany(spells);
    console.log('Data imported successfully');

    mongoose.disconnect();
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});