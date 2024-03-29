/**
 * Plan.js
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
    price: {
      type: 'string',
      required: true
    },
    expiration_days: {
      type: 'integer'
    },
    walks_number: {
      type: 'integer'
    },
    logo: {
      model: 'image',
      defaultsTo: 1
    },
    subscriptions: {
      collection: 'subscription',
      via: 'plan'
    }
  }
};
