const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('./utils/logger');
const ucapanRoutes = require('./routes/ucapanRoutes');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger);

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Connect to database
connectDB();

// Routes
app.use('/api/guests', ucapanRoutes);

app.get('/', (req, res) => {
  res.render('index', { title: 'Ucapan Guestbook' });
});

module.exports = app;
