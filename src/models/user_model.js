var mongoose =  require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    userName : { type: String },
    email: { type: String, unique: true},
    password: { type: String },
    token: { type: String }
});

module.exports = mongoose.model('user', userSchema); 
