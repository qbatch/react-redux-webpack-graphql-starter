var mongoose =  require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    userName : { type: String, required: true },
    email: { type: String, unique: true},
    password: { type: String, required: true },
    token: { type: String }
});

module.exports = mongoose.model('user', userSchema); 
