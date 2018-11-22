const config = require('config.json');
const mongoose = require('mongoose');

// USING IMPORTANT THINGS
var url = process.env.DATABASEURL || "mongodb://unoiatech:12345678a@ds211088.mlab.com:11088/zoho_api";
mongoose.connect(url);

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};