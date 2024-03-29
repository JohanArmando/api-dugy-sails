/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: function (req, res) {
    var email = req.param('email');
    var password = req.param('password');

    if (!email || !password) {
      return res.json(401, {err: 'email and password required'});
    }
    User.findOne({email: email})
    .populate(['role', 'avatar', 'subscriptions'])
    .then(user => {
      if (!user) {
        return res.json(401, {err: 'email is incorrect'});
      }
      User.comparePassword(password, user, function (err, valid) {
        if (err) {
          return res.json(403, {err: 'forbidden'});
        }

        if (!valid) {
          return res.json(401, {err: 'invalid email or password'});
        } else {
          Subscription.findOne({
            user: user.id,
            status: true
          })
          .populate('plan')
          .then(subscription => {
            if (!subscription) {
              user.subscription_active = null;
            } else {
              user.subscription_active = subscription;
            }
            res.json({
              user: user,
              token: jwToken.issue({id : user.id })
            });
          })

        }
      });
    })
    .catch(() => {
      return res.json(401, {err: 'error database'});
    });
  },
  getUSer: function (req, res) {
    Subscription.findOne({
      user: req.user.id,
      status: true
    })
    .populate('plan')
    .then(subscription => {
      if (!subscription) {
        req.user.subscription_active = null;
      } else {
        req.user.subscription_active = subscription;
      }
      res.json({
        user: req.user,
        token: jwToken.issue({id : req.user.id })
      });
    })
  }

};
