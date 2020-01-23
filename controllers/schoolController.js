School = require('../models/schoolModel');

// Handle index actions
exports.index = function (req, res) {
  School.get(function (err, schools) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Schools retrieved successfully",
      data: schools
    });
  });
};

exports.new = function (req, res) {
  var school = new School();
  school.name = req.body.name;
  school.save(function (err) {
      if (err)
          res.json(err);
      res.json({
          message: 'New school created!',
          data: school
      });
  });
};



// Handle view school info
exports.view = function (req, res) {
  School.findById(req.params.school_id, function(err, school) {
    if (err)
    res.send(err);
    res.json({
      message: 'School details loading...',
      data: school
    });
  });
}