const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const programRoutes = require('./routes/Program');
const exerciseRoutes = require('./routes/Exercise');
const userRoutes = require('./routes/User');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/program', programRoutes);
app.use('/api/exercise', exerciseRoutes);
app.use('/api/user', userRoutes);

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});