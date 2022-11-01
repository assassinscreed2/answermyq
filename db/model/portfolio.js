const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  userid:String,
  title:String,
  question : String ,
  answer: [String],
  tags: [Object]
})

const question = mongoose.model('Question');
module.exports = question