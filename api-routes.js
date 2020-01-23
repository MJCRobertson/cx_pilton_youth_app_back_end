// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Running',
        message: 'Welcome to PYCP!',
    });
});
// Import controller
var personController = require('./controllers/personController');

var activityController = require('./controllers/activityController');

var schoolController = require('./controllers/schoolController');

var surgeryController = require('./controllers/surgeryController');

// Activity routes
router.route('/people')
    .get(personController.index)
    .post(personController.new);

router.route('/people/:person_id')
    .get(personController.view)
    .patch(personController.update)
    .put(personController.update)
    .delete(personController.delete);

router.route('/activities')
    .get(activityController.index)
    .post(activityController.new);

router.route('/activities/:activity_id')
    .get(activityController.view)
    .patch(activityController.update)
    .put(activityController.update)
    .delete(activityController.delete);

router.route('/schools')
    .get(schoolController.index)
    .post(schoolController.new);

router.route('/schools/:school_id')
    .get(schoolController.view);

router.route('/surgeries')
    .get(surgeryController.index)
    .post(surgeryController.new);

router.route('/surgeries/:surgery_id')
    .get(surgeryController.view);

// Export API routes
module.exports = router;
