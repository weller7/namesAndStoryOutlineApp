const mongoose = require('mongoose')

const PlotSchema = new mongoose.Schema({
  plotPoint: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('PlotPoint', PlotSchema)