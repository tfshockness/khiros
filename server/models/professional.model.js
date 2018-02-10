var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var professionalInfo = new Schema({
    name: { type:String, required: true, match: /[a-zA-Z]/ },
    speciality: { type:String, required: true },
    profileImg: String,
    credentials: String,
    bio: String,
    isActive: { type: Boolean, default: true }

});

var professionalSchema = new Schema({
    categoryName: String,
    members:[professionalInfo]
});

module.exports = mongoose.model('Professional', professionalSchema);