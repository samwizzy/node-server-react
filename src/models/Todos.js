var mongoose = require('mongoose');
var TodoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  severity: String,
  status: String,
  user: Object,
  comments: [],
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);