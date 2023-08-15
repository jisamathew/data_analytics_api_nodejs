const mongoose = require('mongoose');
// Define collection and schema
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

let LogSchema = new Schema({
   _id:{type:ObjectId},
   lei: { type: String },
   pastRecordStatus: { type: String },
   currentRecordStatus: { type: String },
   dateVerified: { type: String },
   wallet: {  type: String },
})
module.exports = mongoose.model('Log', LogSchema)
