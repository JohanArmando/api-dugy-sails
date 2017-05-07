/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 var bcrypt = require('bcrypt');
 var fs = require('fs');

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
    avatar_url: {
      type: 'string'
    },
    role: {
      model: 'role'
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
      obj.avatar_url = sails.config.urls.url_local + obj.avatar_url;
      return obj;
    }
  },
  beforeCreate : function (values, next) {
   bcrypt.genSalt(10, function (err, salt) {
      if(err) return next(err);
      bcrypt.hash(values.password, salt, function (err, hash) {
        if(err) return next(err);
        values.encryptedPassword = hash;
        if (values.avatar == null) {
          return next(err);
        }
        var buff = new Buffer(values.avatar.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
        fs.writeFile('.tmp/public/avatars/'+values.email+'_avatar.png', buff, function (err) {
          if(err) {
              sails.log(err)
              next();
          }
          values.avatar_url = '/avatars/' + values.email+'_avatar.png';
           sails.log("The file was saved!");
           next();
        });
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
