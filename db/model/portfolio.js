const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  userid:String,
  title:String,
  question : String ,
  answer: [String],
  tags: [Object]
})

//console.log(mongoose.models)
const question = mongoose.models.Question || mongoose.model('Question',questionSchema);
module.exports = question