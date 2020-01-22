Surgery = require('../models/surgeryModel');

// Handle index actions
exports.index = function (req, res) {
  Surgery.get(function (err, surgeries) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Surgeries retrieved successfully",
      data: surgeries
    });
  });
};

exports.new = function (req, res) {
  var surgery = new Surgery();
  surgery.name = req.body.name;
  surgery.save(function (err) {
      if (err)
          res.json(err);
      res.json({
          message: 'New surgery created!',
          data: surgery
      });
  });
};



// Handle view school info
exports.view = function (req, res) {
  Surgery.findById(req.params.surgery_id, function(err, surgery) {
    if (err)
    res.send(err);
    res.json({
      message: 'School details loading...',
      data: surgery
    });
  });
}