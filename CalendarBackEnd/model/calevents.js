//Our events object schema
var mongoose = require('mongoose');
var eventSchema = new mongoose.Schema({
  date: String,
  starttime: String,
  endtime: String,
  description: String
});
mongoose.model('calevent', eventSchema);
