const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({

    title: String,
    date: String,
    startTime: String,
    endTime: String,
    age: [String],
    gender: String,
    location: String,
    description: String

})

const Activity = module.exports = mongoose.model('activity', activitySchema);
module.exports.get = function (callback, limit) {
    Activity.find(callback).limit(limit);
}
