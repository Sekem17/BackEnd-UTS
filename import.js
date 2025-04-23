const mongoose = require('mongoose');
const fs = require('fs');
const Class = require('./models/Class');

mongoose.connect('mongodb+srv://Samuel:popapopi17@contohcluster.27tfw.mongodb.net/?retryWrites=true&w=majority&appName=contohCluster', {
    useNewUrlParser: true,
})
.then(async () => {
    console.log('Connected to MongoDB');
    
    const data = fs.readFileSync('./data/classes.json');
    const classes = JSON.parse(data);

    await Class.insertMany(classes);
    console.log('Data imported successfully');

    mongoose.disconnect();
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});