var mongoose = require('mongoose');

var Schema = mongoose.Schema;
  // these values can be whatever you want - we're defaulting to a
    // max of 5 attempts, resulting in a 2 hour lock
    MAX_LOGIN_ATTEMPTS = 5,
    LOCK_TIME = 2 * 60 * 60 * 1000;


var UserDetail = new Schema({
	username: String,
	password: String,
	email: String,
	localtion: String,
	loginAttempts: { type: Number, required: true, default: 0 },
    lockUntil: { type: Number }
  });

UserDetail.virtual('isLocked').get(function() {
    // check for a future lockUntil timestamp
    console.log("test/....")
    return !!(this.lockUntil && this.lockUntil > Date.now());
});

UserDetail.methods.incLoginAttempts = function(cb) {
    // if we have a previous lock that has expired, restart at 1
    if (this.lockUntil && this.lockUntil < Date.now()) {
        return this.update({
            $set: { loginAttempts: 1 },
            $unset: { lockUntil: 1 }
        }, cb);
    }
    // otherwise we're incrementing
    var updates = { $inc: { loginAttempts: 1 } };
    // lock the account if we've reached max attempts and it's not locked already
    if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
        updates.$set = { lockUntil: Date.now() + LOCK_TIME };
    }
    return this.update(updates, cb);
};

// expose enum on the model, and provide an internal convenience reference 
UserDetail.statics.failedLogin = {
    NOT_FOUND: 0,
    PASSWORD_INCORRECT: 1,
    MAX_ATTEMPTS: 2
};

var UserModel =  mongoose.model('users', UserDetail);
module.exports = UserModel;

