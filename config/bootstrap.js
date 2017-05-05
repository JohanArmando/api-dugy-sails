/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  var Rpa = Race.create({name:'Pastor Aleman'}).exec(function (err, data){
    if (err) { return 1 }
    sails.log('race\'s id is:', data.id);
  });
  var Rla = Race.create({name:'Labrador'}).exec(function (err, data){
    if (err) { return 1 }
    sails.log('race\'s id is:', data.id);
  });
  var Rpi = Race.create({name:'Pitbull'}).exec(function (err, data){
    if (err) { return 1 }
    sails.log('race\'s id is:', data.id);
  });
  var Rsa = Race.create({name:'San Bernardo'}).exec(function (err, data){
    if (err) { return 1 }
    sails.log('race\'s id is:', data.id);
  });

  var Ss = Size.create({slug:'small',name:'s'}).exec(function (err, data){
    if (err) { return 1 }
    sails.log('bien: ', data.id);
  });
  var Sm = Size.create({slug:'medium',name:'m'}).exec(function (err, data){
    if (err) { return 1 }
    sails.log('bien: ', data.id);
  });
  var Sl = Size.create({slug:'large',name:'l'}).exec(function (err, data){
    if (err) { return 1 }
    sails.log('bien: ', data.id);
  });

  // var Ud = User.create({name:'David',last_name: 'Figueroa',email: 'davidfigueroar9@gmail.com',password: '123456'}).exec(function (err, data){
  //   if (err) { return 1 }
  //   Race.find({name:'Labrador'}).exec((err, pet) => {
  //     data.pets.add({ race: pet.id, born_date: '2016/05/05', name: 'fido' });
  //     sails.log('race\'s id is:', data.id);
  //   });
  //
  // });
  var Ud = User.create({name:'David',last_name: 'Figueroa',email: 'davidfigueroar9@gmail.com',password: '123456'})
  .then((user) => {
    Race.find({name:'Labrador'})
    .then((race) => {
      sails.log('race - ', race);
      user.pets.add({ race: race[0].id, born_date: '2016/05/05', name: 'fido' });
      user.save(function(err) {});
    })
    .catch((err) => {
      sails.log('error p', err);
    });
    sails.log('user',user);
  })
  .catch((err) => {
    sails.log('error u', err);
  });



  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
