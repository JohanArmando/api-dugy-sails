/**
 * Image.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var fs      = require('fs');
var easyimg = require('easyimage');
const uuidV4 = require('uuid/v4');

module.exports = {
  schema: true,
  attributes: {
    thumbnail: {
      type: 'string'
    },
    original: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    pet: {
      model: 'pet'
    },
    // We don't wan't to send back encrypted password either
    toJSON: function () {
      var obj = this.toObject();
      if (obj.pet == null) {
        delete obj.pet;
      }
      obj.thumbnail = sails.config.urls.url_local + obj.thumbnail;
      obj.original  = sails.config.urls.url_local + obj.original;
      return obj;
    }
  },
  beforeCreate : function (values, next) {
    var uuid = uuidV4();
    if (values.avatar == null) {
      var dir = '.tmp/public/images';
      if (!fs.existsSync(dir)){
        if (!fs.existsSync('.tmp/public')){
          fs.mkdirSync('.tmp/public');
        }
        fs.mkdirSync('.tmp/public/images');
      }
      fs.mkdirSync('.tmp/public/images/' + uuid);
      var buff = new Buffer(values.avatar.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
      fs.writeFile('.tmp/public/images/'+ uuid +'/'+values.name, buff, function (err) {
        if(err) {
            sails.log(err)
            next();
        }
        values.original = '/images/' + uuid +'/' + values.name;
        easyimg.thumbnail({
             src:'.tmp/public/images/' + uuid +'/' +values.name, dst:'.tmp/public/images/'+uuid+'/thumbnail-'+values.name,
             width:400, height:400
          }).then(
          function(image) {
            values.thumbnail = '/images/'+ uuid +'/thumbnail-'+values.name;
            next();
          },
          function (err) {
            console.log(err);
          }
        );
      });
    } else {
      Image.findOne({name: 'default.jpg'}).then(image => {
        values.thumbnail = image.thumbnail;
        values.name = image.name;
        values.original = image.original;
      })
    }
  },
};
