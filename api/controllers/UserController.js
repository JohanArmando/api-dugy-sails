/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
	// findOne (req, res) {
	// 	User.findOne(req.param('id')).populate('pets').populate('pets.race').then(user => {
	// 		return res.json(200, user);
	// 	});
	// }
	create: function (req, res) {
    if (req.body.password !== req.body.confirmPassword) {
      return res.json(401, {err: 'Password doesn\'t match, What a shame!'});
    }

    User.create(req.body).exec(function (err, user) {
      if (err) {
        return res.json(err.status, {err: err});
      }
      // If user created successfuly we return user and token as response
      if (user) {
				User.findOne({email: email})
		    .populate(['role', 'avatar'])
		    .then(user => {
					res.json(200, {user: user, token: jwToken.issue({id: user.id})});
		    })
      }
    });
  }
};
