/**
 * Plan.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    price: {
      type: 'string',
      required: true
    },
    expiration_days: {
      type: 'string'
    },
    logo: {
      type: 'longtext'
    },
    subscriptions: {
      collection: 'subscription',
      via: 'plan'
    }
  }
};
