const express = require('express');
const mongoose = require('mongoose');
const weaponRoutes = require('./routes/weapons');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dungeonDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// Routes
app.use('/weapons', weaponRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
