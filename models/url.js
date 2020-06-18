const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

const UrlSchema =  new Schema({
    urlData: String
    // date: Date
});

module.exports = mongoose.model('url',UrlSchema, 'url')