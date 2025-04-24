const express = require('express');
const app = express();
const monstersRoute = require('./routes/monsters');
const weaponsRoute = require('./routes/weapons');
const spellsRoute = require('./routes/spells');
const classesRoute = require('./routes/class');
const MagicitemRoute = require('./routes/magicitems');
const ArmorRoute = require('./routes/armors');
const mongoose = require('mongoose');

app.use(express.json());
app.use('/api/v1/monsters', monstersRoute);
app.use('/api/v1/weapons',weaponsRoute);
app.use('/api/v1/spells',spellsRoute);
app.use('/api/v1/class',classesRoute);
app.use('/api/v1/magicitems',MagicitemRoute);
app.use('/api/v1/armors',ArmorRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect('mongodb+srv://Samuel:popapopi17@contohcluster.27tfw.mongodb.net/?retryWrites=true&w=majority&appName=contohCluster', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;
 
db.once("open", () => {
  console.log("Succesfully connected to MongoDB");
});
