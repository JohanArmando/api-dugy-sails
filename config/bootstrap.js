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

  Race.create({name:'Pastor Aleman'}).then((Rpa) => {
    Race.create({name:'Labrador'}).then((Rla) => {
      Race.create({name:'Pitbull'}).then((Rpi) => {
        Race.create({name:'San Bernardo'}).then((Rsa) => {
          Race.create({name:'Chao chao'}).then((Rcc) => {
            Size.create({slug:'small',name:'s'}).then((Ss) => {
              Size.create({slug:'medium',name:'m'}).then((Sm) => {
                Size.create({slug:'large',name:'l'}).then((Sl) => {
                  Role.create({name: 'Super Usuario', slug: 'superuser', description: ''})
                  .then(role => {

                  });
                  Role.create({name: 'Administrador', slug: 'admin', description: ''})
                  .then(role => {

                  });
                  Role.create({name: 'Cliente', slug: 'client', description: ''})
                  .then(role => {
                    User.create({name:'David',last_name: 'Figueroa',email: 'davidfigueroar9@gmail.com',password: '123456', role: role.id}).then((user) => {
                      user.pets.add({ race: Rpa.id, size: Sm.id, born_date: '2016/05/05', name: 'Princesa' });
                      user.pets.add({ race: Rla.id, size: Sl.id, born_date: '2016/05/05', name: 'Duke' });
                      user.pets.add({ race: Rpi.id, size: Ss.id, born_date: '2016/05/05', name: 'Firulais' });
                      user.pets.add({ race: Rsa.id, size: Sm.id, born_date: '2016/05/05', name: 'Paco' });
                      user.save();
                    });
                    User.create({name:'Viviannys',last_name: 'Diaz',email: 'viviannysdiaz@gmail.com',password: '123456', role: role.id}).then((user) => {
                      user.pets.add({ race: Rpa.id, size: Ss.id, born_date: '2016/05/05', name: 'Traki' });
                      user.pets.add({ race: Rla.id, size: Sl.id, born_date: '2016/05/05', name: 'Pucho' });
                      user.pets.add({ race: Rpi.id, size: Sl.id, born_date: '2016/05/05', name: 'Carta' });
                      user.pets.add({ race: Rsa.id, size: Ss.id, born_date: '2016/05/05', name: 'Cosi' });
                      user.save();
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });


  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
