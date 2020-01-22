// personController.js
// Import person model
Person = require('../models/personModel');

// Handle index actions
exports.index = function (req, res) {
    Person.get(function (err, people) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "People retrieved successfully",
            data: people
        });
    });
};

// Handle create person actions
exports.new = function (req, res) {
    var person = new Person();
    person.name = req.body.name;
    person.name.firstName = req.body.name.firstName;
    person.name.lastName = req.body.name.lastName;
    person.gender = req.body.gender;
    person.dob = req.body.dob;
    person.address = req.body.address;
    person.address.address = req.body.address.address;
    person.address.postcode = req.body.address.postcode;
    person.childContactNumber = req.body.childContactNumber;
    person.guardianContactNumber = req.body.guardianContactNumber;
    person.emergencyContact = req.body.emergencyContact;
    person.emergencyContact.name = req.body.emergencyContact.name;
    person.emergencyContact.relationship = req.body.emergencyContact.relationship;
    person.emergencyContact.number = req.body.emergencyContact.number;
    person.email = req.body.email;
    person.dietaryRequirements = req.body.dietaryRequirements;
    person.dietaryRequirements.exists = req.body.dietaryRequirements.exists;
    person.dietaryRequirements.details = req.body.dietaryRequirements.details;
    person.medicalConditions = req.body.medicalConditions;
    person.medicalConditions.exists = req.body.medicalConditions.exists;
    person.medicalConditions.details = req.body.medicalConditions.details;
    person.medicalConditions.medications = req.body.medicalConditions.medications;
    person.allergies = req.body.allergies;
    person.allergies.exists = req.body.allergies.exists;
    person.allergies.details = req.body.allergies.details;
    person.doctorsSurgery = req.body.doctorsSurgery;
    person.community = req.body.community;
    person.school = req.body.school;
    person.school.name = req.body.school.name;
    person.school.year = req.body.school.year;
    person.photographyPermission = req.body.photographyPermission;
    person.pickUp = req.body.pickUp;
    person.pickUp.toBeCollected = req.body.pickUp.toBeCollected;
    person.pickUp.byWho = req.body.pickUp.byWho;
    person.siblings = req.body.siblings;
    person.siblings.exists = req.body.siblings.exists;
    person.siblings.ids = req.body.siblings.ids;
    person.ethnicity = req.body.ethnicity;
    person.volunteering = req.body.volunteering;
    person.signed = req.body.signed;
    person.signed.signed = req.body.signed.signed;
    person.signed.name = req.body.signed.name;
    person.signed.relationship = req.body.signed.relationship;
    person.signed.date = req.body.signed.date;
    person.timeOut = req.body.timeOut;
    person.timeOut.exists = req.body.timeOut.exists;
    person.timeOut.reason = req.body.timeOut.reason;
    person.timeOut.notes = req.body.timeOut.notes;
    person.timeOut.startDate = req.body.timeOut.startDate;
    person.timeOut.endDate = req.body.timeOut.endDate;

// save the person and check for errors
    person.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New person created!',
            data: person
        });
    });
};

// Handle view person info
exports.view = function (req, res) {
    Person.findById(req.params.person_id, function (err, person) {
        if (err)
            res.send(err);
        res.json({
            message: 'Person details loading..',
            data: person
        });
    });
};

// Handle update person info
exports.update = function (req, res) {
Person.findById(req.params.person_id, function (err, person) {
        if (err)
            res.send(err);
            person.name = req.body.name;
            person.name.firstName = req.body.name.firstName;
            person.name.lastName = req.body.name.lastName;
            person.gender = req.body.gender;
            person.dob = req.body.dob;
            person.address = req.body.address;
            person.address.address = req.body.address.address;
            person.address.postcode = req.body.address.postcode;
            person.childContactNumber = req.body.childContactNumber;
            person.emergencyContact = req.body.emergencyContact;
            person.emergencyContact.name = req.body.emergencyContact.name;
            person.emergencyContact.relationship = req.body.emergencyContact.relationship;
            person.emergencyContact.number = req.body.emergencyContact.number;
            person.emails = req.body.emails;
            person.dietaryRequirements = req.body.dietaryRequirements;
            person.dietaryRequirements.exists = req.body.dietaryRequirements.exists;
            person.dietaryRequirements.details = req.body.dietaryRequirements.details;
            person.medicalConditions = req.body.medicalConditions;
            person.medicalConditions.exists = req.body.medicalConditions.exists;
            person.medicalConditions.details = req.body.medicalConditions.details;
            person.medicalConditions.medications = req.body.medicalConditions.medications;
            person.allergies = req.body.allergies;
            person.allergies.exists = req.body.allergies.exists;
            person.allergies.details = req.body.allergies.details;
            person.doctorsSurgery = req.body.doctorsSurgery;
            person.community = req.body.community;
            person.school = req.body.school;
            person.school.name = req.body.school.name;
            person.school.year = req.body.school.year;
            person.photographyPermission = req.body.photographyPermission;
            person.pickUp = req.body.pickUp;
            person.pickUp.toBeCollected = req.body.pickUp.toBeCollected;
            person.pickUp.byWho = req.body.pickUp.byWho;
            person.siblings = req.body.siblings;
            person.siblings.exists = req.body.siblings.exists;
            person.siblings.ids = req.body.siblings.ids;
            person.ethnicity = req.body.ethnicity;
            person.volunteering = req.body.volunteering;
            person.signed = req.body.signed;
            person.signed.signed = req.body.signed.signed;
            person.signed.name = req.body.signed.name;
            person.signed.relationship = req.body.signed.relationship;
            person.signed.date = req.body.signed.date;
            person.timeOut = req.body.timeOut;
            person.timeOut.exists = req.body.timeOut.exists;
            person.timeOut.startDate = req.body.timeOut.startDate;
            person.timeOut.endDate = req.body.timeOut.endDate;
            person.timeOut.reason = req.body.timeOut.reason;
            person.timeOut.notes = req.body.timeOut.notes;
            person.timeOut.startDate = req.body.timeOut.startDate;
            person.timeOut.endDate = req.body.timeOut.endDate;

// save the person and check for errors
        person.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Person Info updated',
                data: person
            });
        });
    });
};

// Handle delete person
exports.delete = function (req, res) {
    Person.remove({
        _id: req.params.person_id
    }, function (err, person) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Person deleted'
        });
    });
};
