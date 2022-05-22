const mongoose = require('mongoose');

const carsSchema = mongoose.Schema({
  brand: {
    type: String,
  },
  patent: {
    type: String,
  },
  model: {
    type: Number,
  },
  price: {
    type: Number,
  },
  insurance: {
    type: Boolean,
  },
});

module.exports = mongoose.model('Cars', carsSchema);
