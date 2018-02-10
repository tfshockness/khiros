var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var professionalInfo = new Schema({
    name: String,
    speciality: String,
    profileImg: String,
    credentials: String,
    bio: String,
    isActive: Boolean

});

var professionalSchema = new Schema({
    categoryName: String,
    members:[professionalInfo]
});

module.exports = mongoose.model('Professional', professionalSchema);