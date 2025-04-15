const express = require('express');
const app = express();
const monstersRoute = require('./routes/monsters');
const mongoose = require('mongoose');

app.use(express.json());
app.use('/api/monsters', monstersRoute);

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
