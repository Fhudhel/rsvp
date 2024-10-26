const mongoose = require('mongoose');

const ucapanSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  pesan: {
    type: String,
    required: true,
  },
  kehadiran: {
    type: String,
    default: 'Hadir',
  },
});

module.exports = mongoose.model('Ucapan', ucapanSchema);
