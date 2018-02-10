var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var address = new Schema({
    city: String,
    province: String,
    country: String,
    postalCode: String,
    string: String,
    number: Number
});

var branchSchema = new Schema({
    phone: {
        tel: String,
        cel: String
    },
    adress: address
});

var companySchema = new Schema({
    name: String,
    email: String,
    logoImage: String,
    branch: [branchSchema],
    about: String,
    aboutImage: String
});

exports.module = mongoose.model('Company', companySchema);