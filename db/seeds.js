var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pycp');
var db = mongoose.connection;

Activity = require ('../models/activityModel');
Person = require ('../models/personModel');
School = require('../models/schoolModel');

const activityPromise = Activity.remove({}).then(() => {
  console.log('activity collection removed')

  const ccard = new Activity()
    ccard.title = 'c-card drop in',
    ccard.day = 'Wednesday',
    ccard.startTime = '17:15',
    ccard.endTime = '18:15',
    ccard.age = ['S1', 'S2', 'S3', 'S4'],
    ccard.gender = 'Both',
    ccard.location = 'pycp',
    ccard.description = 'Free condoms and advice on sexual health'


  const fridays = new Activity()
    fridays.title = 'Funky Fridays',
    fridays.day = 'Friday',
    fridays.startTime = '13:30',
    fridays.endTime = '15:00',
    fridays.age = ['P1', 'P2'],
    fridays.gender = 'both',
    fridays.location = 'pycp',
    fridays.description = 'Fun activities, arts and crafts, games and sports!'

    return Promise.all([ccard.save(),
    fridays.save()]);

});

const personPromise = Person.remove({}).then(() => {
  console.log('person collection removed')

  const person1 = new Person()
    person1.name.firstName = 'Gav'
    person1.name.lastName = 'Black'
    person1.gender = 'male'
    person1.dob = '12/12/2001'
    person1.address.address = 'black street'
    person1.address.postcode = 'EH12 8GX'
    person1.childContactNumber = '07921809601'
    person1.guardianContactNumber = '01334675849'
    person1.emergencyContact.name = 'Amy'
    person1.emergencyContact.relationship = 'Wife'
    person1.emergencyContact.number = '07921809605'
    person1.email = 'gav@hotmail.com'
    person1.dietaryRequirements.exists = true
    person1.dietaryRequirements.details = 'does not eat food'
    person1.medicalConditions.exists = true
    person1.medicalConditions.details = 'heart condition'
    person1.medicalConditions.medications = 'medication 1'
    person1.allergies.exists = true
    person1.allergies.details = 'food'
    person1.doctorsSurgery = 'Pilton GP'
    person1.community = 'West Pilton'
    person1.school.name = 'Pilton Junior School'
    person1.school.year = 'P7'
    person1.photographyPermission = false
    person1.pickUp.toBeCollected = true
    person1.pickUp.byWho = 'Amy Black'
    person1.siblings.exists = false
    person1.ethnicity = 'white Scottish'
    person1.volunteering = true
    person1.signed.signed = true
    person1.signed.name = 'Amy Black'
    person1.signed.relationship = 'Wife'
    person1.signed.date = '2019/10/17'
    person1.timeOut.exists = true
    person1.timeOut.reason = 'ban for inappropriate behaviour'
    person1.timeOut.notes = '1 week'
    person1.timeOut.startDate = '2019/10/24'
    person1.timeOut.endDate = '2019/10/28'

    const person2 = new Person()
      person2.name.firstName = 'Fidelma'
      person2.name.lastName = 'Beagan'
      person2.gender = 'female'
      person2.dob = '12/12/2001'
      person2.address.address = 'black street'
      person2.address.postcode = 'EH12 8GX'
      person2.childContactNumber = '07921809601'
      person2.guardianContactNumber = '01334675849'
      person2.emergencyContact.name = 'Amy'
      person2.emergencyContact.relationship = 'Wife'
      person2.emergencyContact.number = '07921809605'
      person2.email = 'gav@hotmail.com'
      person2.dietaryRequirements.exists = true
      person2.dietaryRequirements.details = 'does not eat food'
      person2.medicalConditions.exists = true
      person2.medicalConditions.details = 'heart condition'
      person2.medicalConditions.medications = 'medication 1'
      person2.allergies.exists = true
      person2.allergies.details = 'red'
      person2.doctorsSurgery = 'Pilton GP'
      person2.community = 'West Pilton'
      person2.school.name = 'Pilton Junior School'
      person2.school.year = 'P7'
      person2.photographyPermission = false
      person2.pickUp.toBeCollected = true
      person2.pickUp.byWho = 'Amy Black'
      person2.siblings.exists = true
      person2.siblings.ids = [person1]
      person2.ethnicity = 'white Scottish'
      person2.volunteering = true
      person2.signed.signed = true
      person2.signed.name = 'Amy Black'
      person2.signed.relationship = 'Wife'
      person2.signed.date = '2019/10/17'
      person2.timeOut.exists = true
      person2.timeOut.reason = 'ban for inappropriate behaviour'
      person2.timeOut.notes = '1 week'
      person2.timeOut.startDate = '2019/10/24'
      person2.timeOut.endDate = '2019/10/28'

      const person3 = new Person()
      person3.name.firstName = 'Ben'
      person3.name.lastName = 'Hutchison'
      person3.gender = 'male'
      person3.dob = '12/12/2001'
      person3.address.address = 'black street'
      person3.address.postcode = 'EH12 8GX'
      person3.childContactNumber = '07921809601'
      person3.guardianContactNumber = '01334675849'
      person3.emergencyContact.name = 'Shaz'
      person3.emergencyContact.relationship = 'Wife'
      person3.emergencyContact.number = '07921809605'
      person3.email = 'ben@hotmail.com'
      person3.dietaryRequirements.exists = false
      person3.dietaryRequirements.details = ''
      person3.medicalConditions.exists = false
      person3.medicalConditions.details = ''
      person3.medicalConditions.medications = ''
      person3.allergies.exists = true
      person3.allergies.details = 'eggs and nuts'
      person3.doctorsSurgery = 'Pilton GP'
      person3.community = 'West Pilton'
      person3.school.name = 'Pilton Junior School'
      person3.school.year = 'P4'
      person3.photographyPermission = true
      person3.pickUp.toBeCollected = true
      person3.pickUp.byWho = 'Shaz Black'
      person3.siblings.exists = true
      person3.siblings.ids = [person1, person2]
      person3.ethnicity = 'white Scottish'
      person3.volunteering = true
      person3.signed.signed = true
      person3.signed.name = 'Amy Black'
      person3.signed.relationship = 'Wife'
      person3.signed.date = '2019/10/17'
      person3.timeOut.exists = true
      person3.timeOut.reason = 'ban for inappropriate behaviour'
      person3.timeOut.notes = '1 week'
      person3.timeOut.startDate = '2019/10/24'
      person3.timeOut.endDate = '2019/10/28'


      const person4 = new Person()
      person4.name.firstName = 'Mike'
      person4.name.lastName = 'Fallon'
      person4.gender = 'male'
      person4.dob = '12/12/2001'
      person4.address.address = 'black street'
      person4.address.postcode = 'EH12 8GX'
      person4.childContactNumber = '07921809601'
      person4.guardianContactNumber = '01334675849'
      person4.emergencyContact.name = 'Amy'
      person4.emergencyContact.relationship = 'Wife'
      person4.emergencyContact.number = '07921809605'
      person4.email = 'gav@hotmail.com'
      person4.dietaryRequirements.exists = false
      person4.dietaryRequirements.details = 'does not eat food'
      person4.medicalConditions.exists = true
      person4.medicalConditions.details = 'heart condition'
      person4.medicalConditions.medications = 'medication 1'
      person4.allergies.exists = false
      person4.allergies.details = ''
      person4.doctorsSurgery = 'Pilton GP'
      person4.community = 'West Pilton'
      person4.school.name = 'Pilton Junior School'
      person4.school.year = 'S2'
      person4.photographyPermission = false
      person4.pickUp.toBeCollected = true
      person4.pickUp.byWho = 'Amy Black'
      person4.siblings.exists = true
      person4.siblings.ids = [person1]
      person4.ethnicity = 'white Scottish'
      person4.volunteering = true
      person4.signed.signed = true
      person4.signed.name = 'Amy Black'
      person4.signed.relationship = 'Wife'
      person4.signed.date = '2019/10/17'
      person4.timeOut.exists = false
      person4.timeOut.reason = 'ban for inappropriate behaviour'
      person4.timeOut.notes = '1 week'
      person4.timeOut.startDate = '2019/10/24'
      person4.timeOut.endDate = '2019/10/28'

      const person5 = new Person()
      person5.name.firstName = 'Crawford'
      person5.name.lastName = 'Brown'
      person5.gender = 'male'
      person5.dob = '09/12/2001'
      person5.address.address = 'black street'
      person5.address.postcode = 'EH12 8GX'
      person5.childContactNumber = '07921809601'
      person5.guardianContactNumber = '01334675849'
      person5.emergencyContact.name = 'Amy'
      person5.emergencyContact.relationship = 'Wife'
      person5.emergencyContact.number = '07921809605'
      person5.email = 'gav@hotmail.com'
      person5.dietaryRequirements.exists = true
      person5.dietaryRequirements.details = 'does not eat food'
      person5.medicalConditions.exists = false
      person5.medicalConditions.details = 'heart condition'
      person5.medicalConditions.medications = 'medication 1'
      person5.allergies.exists = false
      person5.allergies.details = 'allergic to the colour red'
      person5.doctorsSurgery = 'Pilton GP'
      person5.community = 'West Pilton'
      person5.school.name = 'Pilton Junior School'
      person5.school.year = 'P7'
      person5.photographyPermission = false
      person5.pickUp.toBeCollected = false
      person5.pickUp.byWho = 'Amy Black'
      person5.siblings.exists = false
      person5.siblings.ids = [person1]
      person5.ethnicity = 'white Scottish'
      person5.volunteering = false
      person5.signed.signed = true
      person5.signed.name = 'Amy Black'
      person5.signed.relationship = 'Wife'
      person5.signed.date = '2019/10/17'
      person5.timeOut.exists = false
      person5.timeOut.reason = 'ban for inappropriate behaviour'
      person5.timeOut.notes = '1 week'
      person5.timeOut.startDate = '2019/10/24'
      person5.timeOut.endDate = '2019/10/28'

      const person6 = new Person()
      person6.name.firstName = 'Chris'
      person6.name.lastName = 'Mcauley'
      person6.gender = 'male'
      person6.dob = '12/12/2001'
      person6.address.address = 'black street'
      person6.address.postcode = 'EH12 8GX'
      person6.childContactNumber = '07921809601'
      person6.guardianContactNumber = '01334675849'
      person6.emergencyContact.name = 'Amy'
      person6.emergencyContact.relationship = 'Wife'
      person6.emergencyContact.number = '07921809605'
      person6.email = 'gav@hotmail.com'
      person6.dietaryRequirements.exists = false
      person6.dietaryRequirements.details = 'does not eat food'
      person6.medicalConditions.exists = true
      person6.medicalConditions.details = 'heart condition'
      person6.medicalConditions.medications = 'medication 1'
      person6.allergies.exists = false
      person6.allergies.details = 'allergic to the colour red'
      person6.doctorsSurgery = 'Pilton GP'
      person6.community = 'West Pilton'
      person6.school.name = 'Pilton Junior School'
      person6.school.year = 'P1'
      person6.photographyPermission = true
      person6.pickUp.toBeCollected = false
      person6.pickUp.byWho = 'Amy Black'
      person6.siblings.exists = false
      person6.siblings.ids = [person1]
      person6.ethnicity = 'white Scottish'
      person6.volunteering = false
      person6.signed.signed = true
      person6.signed.name = 'Amy Black'
      person6.signed.relationship = 'Wife'
      person6.signed.date = '2019/10/17'
      person6.timeOut.exists = true
      person6.timeOut.reason = 'ban for inappropriate behaviour'
      person6.timeOut.notes = '1 week'
      person6.timeOut.startDate = '2019/10/24'
      person6.timeOut.endDate = '2019/10/28'

      const person7 = new Person()
      person7.name.firstName = 'Chris'
      person7.name.lastName = 'Mcintosh'
      person7.gender = 'male'
      person7.dob = '12/12/2001'
      person7.address.address = 'black street'
      person7.address.postcode = 'EH12 8GX'
      person7.childContactNumber = '07921809601'
      person7.guardianContactNumber = '01334675849'
      person7.emergencyContact.name = 'Amy'
      person7.emergencyContact.relationship = 'Wife'
      person7.emergencyContact.number = '07921809605'
      person7.email = 'gav@hotmail.com'
      person7.dietaryRequirements.exists = false
      person7.dietaryRequirements.details = 'does not eat food'
      person7.medicalConditions.exists = true
      person7.medicalConditions.details = 'heart condition'
      person7.medicalConditions.medications = 'medication 1'
      person7.allergies.exists = false
      person7.allergies.details = 'allergic to the colour red'
      person7.doctorsSurgery = 'Pilton GP'
      person7.community = 'West Pilton'
      person7.school.name = 'Pilton Junior School'
      person7.school.year = 'P1'
      person7.photographyPermission = true
      person7.pickUp.toBeCollected = false
      person7.pickUp.byWho = 'Amy Black'
      person7.siblings.exists = false
      person7.siblings.ids = [person1]
      person7.ethnicity = 'white Scottish'
      person7.volunteering = false
      person7.signed.signed = true
      person7.signed.name = 'Amy Black'
      person7.signed.relationship = 'Wife'
      person7.signed.date = '2019/10/17'
      person7.timeOut.exists = true
      person7.timeOut.reason = 'ban for inappropriate behaviour'
      person7.timeOut.notes = '1 week'
      person7.timeOut.startDate = '2019/10/24'
      person7.timeOut.endDate = '2019/10/28'

      return Promise.all([
        person1.save(),
        person2.save(),
        person3.save(),
        person4.save(),
        person5.save(),
        person6.save(),
        person7.save()
    ]);

});

// School.remove({}, function(err) {
//     console.log('school collection removed')
//
//     const school1 = new School()
//     school1.name = 'Forthview Primary School'
//
//     school1.save(function(err){
//       if(err)throw err;
//       console.log("school saved");
//     });
//
//     const school2 = new School()
//     school2.name = 'Granton Primary School'
//
//     school2.save());
//
// });

const schoolPromise = School.remove({}).then(() => {
  const school1 = new School()
  school1.name = 'Forthview Primary School'

  const school2 = new School()
  school2.name = 'Granton Primary School'

  return Promise.all([
    school1.save(),
    school2.save()
  ]).then(() => console.log("BOTH SCHOOLS SAVED!"));
})


Promise.all([
  schoolPromise,
  activityPromise,
  personPromise
]).then(() => {
  console.log("All promises done!")
mongoose.disconnect();
}).catch(function(error){
  console.log('Error occured ${error}');
})
