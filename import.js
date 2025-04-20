const mongoose = require('mongoose');
const fs = require('fs');
const Weapon = require('./models/Weapon');

mongoose.connect('mongodb+srv://Samuel:popapopi17@contohcluster.27tfw.mongodb.net/?retryWrites=true&w=majority&appName=contohCluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    console.log('Connected to MongoDB');
    
    const data = fs.readFileSync('./data/weapons.json');
    const weapons = JSON.parse(data);

    await Weapon.insertMany(weapons);
    console.log('Data imported successfully');

    mongoose.disconnect();
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});