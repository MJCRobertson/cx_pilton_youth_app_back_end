const mongoose = require('mongoose');

const surgerySchema = mongoose.Schema({

  name: String

})

const Surgery = module.exports = mongoose.model('surgery', surgerySchema);
module.exports.get = function (callback, limit) {
  Surgery.find(callback).limit(limit);
}