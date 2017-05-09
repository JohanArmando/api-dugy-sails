/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt  = require('bcrypt-nodejs');

module.exports = {
  schema: true,
  attributes: {
    email: {
      type: 'string',
      unique: true,
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    last_name: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string'
    },
    documentation: {
      type: 'string'
    },
    role: {
      model: 'role'
    },
    avatar:{
      model: 'image',
      defaultsTo: 1
    },
    pets: {
      collection: 'pet',
      via: 'owner'
    },
    subscriptions: {
      collection: 'subscription',
      via: 'user'
    },
    encryptedPassword: {
      type: 'string'
    },
    // We don't wan't to send back encrypted password either
    toJSON: function () {
      var obj = this.toObject();
      delete obj.encryptedPassword;
      return obj;
    }
  },
  beforeCreate : function (values, next) {
   bcrypt.genSalt(10, function (err, salt) {
      if(err) return next(err);
      bcrypt.hash(values.password, salt, null, function (err, hash) {
        if(err) return next(err);
        values.encryptedPassword = hash;

        if (values.role == null) {
          Role.findOne({slug: 'client'})
          .then(role => {
            values.role = role.id;
            next();
          })
        } else {
          next();
        }

      });
    });
  },

  comparePassword : function (password, user, cb) {
    bcrypt.compare(password, user.encryptedPassword, function (err, match) {

      if(err) cb(err);
      if(match) {
        cb(null, true);
      } else {
        cb(err);
      }
    })
  }
};
