/**
 * Service.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    address: {
      type: 'string',
      required: true
    },
    latitude: {
      type: 'string',
      required: true
    },
    longitude: {
      type: 'string',
      required: true
    },
    date: {
      type: 'datetime',
      required: true
    },
    hours: {
      type: 'integer',
      required: true
    },
    client: {
      model: 'user',
      required: true
    },
    walker: {
      model: 'user'
    },
    pets: {
      collection: 'pet',
      via: 'services',
      dominant: true
    },
    photos: {
      collection: 'image',
      via: 'service'
    },
  }
};
