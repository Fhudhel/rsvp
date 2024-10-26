const Ucapan = require('../models/Ucapan');

// Get all ucapan
exports.getUcapan = async (req, res) => {
  try {
    const ucapan = await Ucapan.find();
    res.status(200).json(ucapan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new ucapan
exports.addUcapan = async (req, res) => {
  const { nama, pesan, kehadiran } = req.body;
  try {
    const newUcapan = new Ucapan({
      nama,
      pesan,
      kehadiran,
    });
    await newUcapan.save();
    res.status(201).json(newUcapan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
