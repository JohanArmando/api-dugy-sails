/**
 * Subscription.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    user: {
      model: 'user'
    },
    plan: {
      model: 'plan'
    },
    status: {
      type: 'boolean',
      defaultsTo: true
    },
    start_date: {
      type: 'date'
    },
    end_date: {
      type: 'date'
    },
    recurrent: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};
