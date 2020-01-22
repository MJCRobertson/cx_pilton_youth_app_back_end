const mongoose = require('mongoose');

const schoolSchema = mongoose.Schema({

  name: String

})

const School = module.exports = mongoose.model('school', schoolSchema);
module.exports.get = function (callback, limit) {
  School.find(callback).limit(limit);
}