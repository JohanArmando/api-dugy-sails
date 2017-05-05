/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

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
    password: {
      type: 'string'
    },
    avatar: {
      type: 'longtext'
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
    }
  }
};
