// activityController.js
// Import activity model
Activity = require('../models/activityModel');

// Handle index actions
exports.index = function (req, res) {
    Activity.get(function (err, activities) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Activities retrieved successfully",
            data: activities
        });
    });
};

// Handle create activity actions
exports.new = function (req, res) {
    var activity = new Activity();
    activity.title = req.body.title;
    activity.date = req.body.date;
    activity.startTime = req.body.startTime;
    activity.endTime = req.body.endTime;
    activity.age = req.body.age;
    activity.gender = req.body.gender;
    activity.location = req.body.location;
    activity.description = req.body.description;

// save the activity and check for errors
    activity.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New activity created!',
            data: activity
        });
    });
};

// Handle view activity info
exports.view = function (req, res) {
    Activity.findById(req.params.activity_id, function (err, activity) {
        if (err)
            res.send(err);
        res.json({
            message: 'Activity details loading...',
            data: activity
        });
    });
};

// Handle update activity info
exports.update = function (req, res) {
Activity.findById(req.params.activity_id, function (err, activity) {
        if (err)
            res.send(err);
            activity.title = req.body.title;
            activity.date = req.body.date;
            activity.startTime = req.body.startTime;
            activity.endTime = req.body.endTime;
            activity.age = req.body.age;
            activity.gender = req.body.gender;
            activity.location = req.body.location;
            activity.description = req.body.description;

// save the activity and check for errors
        activity.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Activity Info updated',
                data: activity
            });
        });
    });
};
// Handle delete activity
exports.delete = function (req, res) {
    Activity.remove({
        _id: req.params.activity_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Activity deleted'
        });
    });
};
