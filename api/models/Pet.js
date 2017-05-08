/**
 * Pet.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    comments: {
      type: 'date'
    },
    born_date: {
      type: 'date'
    },
    owner: {
      model: 'user'
    },
    race: {
      model: 'race'
    },
    size: {
      model: 'size'
    },
    photos: {
      collection: 'image',
      via: 'pet'
    },
  }
};
