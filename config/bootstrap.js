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

process.env.TZ = 'COT'; //whatever timezone you want

var img = 'data:image/jpeg;base64,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BbABbAsFsCwLBbAsCwLAsCwSwLAsEsCwQCwQEsAEsEAsEAsEBAASQQEBJBAAAAAAAAAAAAAAAAAAAAAAAAAAWAWAUAFsAAFsFABbABbABbABQWwAWwLABQLAsCwLAsCwLAsEAAsEsAEsAEsAEBLABLABAQACQZkAEkEAAAAAAAAAAAAAAAAAAAAAAAAABYBQUAACwUAFAsFAsFABbABbAsFAsFsAACwWwLAsCwLAsEsACwSwLBALBAALBALBAASwQACwQEABJBAAAAAAAAAAAAAAAAAAAAAAAAAAWAUCAUAAAFAABbBQALBQAWwAAWwLAsFAAsCwLAsCwLAABLAsAEAAsEABLABALBAAAQAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAFgFAABQAAAWAAAUCwUACwUACwWwAAAUCwLAsCwLAsEAAAsCwQACwSwAASwQAAEsAAAEBJBAAAAAAAAAAAAAAAAAAAAAAAAAAAWAUAAAFAAAABQAAWwLBQALAsFAAAsCwWwLAsCwLAsEsAAACwSwAAQCwQAACwQAAAEABJBAAAAAAAAAAAAAAAAAAAAAAAAAAAWAUAAAACwUAAACwUAAAFsCwUAACwLAsCwWwLAsCwSwLAsAAAEAsCwQAAAEAAAABAAASQQAAAAAAAAAAAAAAAAAAAAAAAAAAFgFAAAAAABbAAAAAsFAAAABbAsCwLABQAAAAAASwLAsEAAAAAsEAAAABLAAAABJBAAAAAAAAAAAAAAAAAAAAAAAAAAAUAFAAAAAAABbAAAAABbAAAAAAAAAAAAAAAAAAAAsEsAAAAAEsAAAAAAEkEAAAAAAAAAAAAAAAAAAAAAAAAAAAABbBQAAAAAAAAWwAAAAAALBbAsAAAAAAAAACwLAsEAAAAAABLAAAAAAAABJBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUFAAAAAAAAA5goAAAAAAAAAAAAAAAAAAAAAAAJzAAAAAAAAABJBAAAAAAAAAAAAAAAf/2Q=='

module.exports.bootstrap = function(cb) {
  User.find().then(users => {
    if (users.length == 0) {
      Race.create({name:'Pastor Aleman', description: ''}).then((Rpa) => {
        Race.create({name:'Labrador', description: ''}).then((Rla) => {
          Race.create({name:'Pitbull', description: ''}).then((Rpi) => {
            Race.create({name:'San Bernardo', description: ''}).then((Rsa) => {
              Race.create({name:'Chao chao', description: ''}).then((Rcc) => {
                Size.create({slug:'small',name:'s'}).then((Ss) => {
                  Size.create({slug:'medium',name:'m'}).then((Sm) => {
                    Size.create({slug:'large',name:'l'}).then((Sl) => {
                      Role.create({name: 'Super Usuario', slug: 'superuser', description: ''})
                      .then(role => {

                      });
                      Role.create({name: 'Administrador', slug: 'admin', description: ''})
                      .then(role => {
                        User.create({name:'Mario',last_name: 'Diaz',email: 'admin@gmail.com',password: '123456', role: role.id}).then((user) => {
                          user.pets.add({ race: Rpa.id, size: Ss.id, born_date: '2016/05/05', name: 'Traki', photos: [{ avatar: img, name: 'happy-pet.jpj'},{ avatar: img, name: 'happy-pet2.jpj'}] });
                          user.pets.add({ race: Rla.id, size: Sl.id, born_date: '2016/05/05', name: 'Pucho', photos: [{ avatar: img, name: 'happy-pet.jpj'},{ avatar: img, name: 'happy-pet2.jpj'}] });
                          user.pets.add({ race: Rpi.id, size: Sl.id, born_date: '2016/05/05', name: 'Carta', photos: [{ avatar: img, name: 'happy-pet.jpj'},{ avatar: img, name: 'happy-pet2.jpj'}] });
                          user.pets.add({ race: Rsa.id, size: Ss.id, born_date: '2016/05/05', name: 'Cosi',  photos: [{ avatar: img, name: 'happy-pet.jpj'},{ avatar: img, name: 'happy-pet2.jpj'}] });
                          user.save();
                        });
                      });
                      Image.create({name: 'default.jpg', avatar: img })
                      .then(image => {
                        Role.create({name: 'Cliente', slug: 'client', description: ''})
                        .then(role => {
                          User.create({name:'David',last_name: 'Figueroa',email: 'davidfigueroar9@gmail.com',password: '123456', role: role.id}).then((user) => {
                            user.pets.add({ race: Rpa.id, size: Sm.id, born_date: '2016/05/05', name: 'Princesa', photos: [{ avatar: img, name: 'happy-pet.jpj'},{ avatar: img, name: 'happy-pet2.jpj'}] });
                            user.pets.add({ race: Rla.id, size: Sl.id, born_date: '2016/05/05', name: 'Duke', photos: [{ avatar: img, name: 'happy-pet.jpj'},{ avatar: img, name: 'happy-pet2.jpj'}] });
                            user.pets.add({ race: Rpi.id, size: Ss.id, born_date: '2016/05/05', name: 'Firulais', photos: [{ avatar: img, name: 'happy-pet.jpj'},{ avatar: img, name: 'happy-pet2.jpj'}] });
                            user.pets.add({ race: Rsa.id, size: Sm.id, born_date: '2016/05/05', name: 'Paco', photos: [{ avatar: img, name: 'happy-pet.jpj'},{ avatar: img, name: 'happy-pet2.jpj'}] });
                            user.save();
                          });
                          User.create({name:'Mario',last_name: 'Diaz',email: 'mario@gmail.com',password: '123456', role: role.id}).then((user) => {
                            user.pets.add({ race: Rpa.id, size: Ss.id, born_date: '2016/05/05', name: 'Traki', photos: [{ avatar: img, name: 'happy-pet.jpj'},{ avatar: img, name: 'happy-pet2.jpj'}] });
                            user.pets.add({ race: Rla.id, size: Sl.id, born_date: '2016/05/05', name: 'Pucho', photos: [{ avatar: img, name: 'happy-pet.jpj'},{ avatar: img, name: 'happy-pet2.jpj'}] });
                            user.pets.add({ race: Rpi.id, size: Sl.id, born_date: '2016/05/05', name: 'Carta', photos: [{ avatar: img, name: 'happy-pet.jpj'},{ avatar: img, name: 'happy-pet2.jpj'}] });
                            user.pets.add({ race: Rsa.id, size: Ss.id, born_date: '2016/05/05', name: 'Cosi',  photos: [{ avatar: img, name: 'happy-pet.jpj'},{ avatar: img, name: 'happy-pet2.jpj'}] });
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
      });
    }
  });


  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
