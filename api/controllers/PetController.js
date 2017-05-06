/**
 * PetController
 *
 * @description :: Server-side logic for managing pets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function (req,res) {
		Pet.find({owner : req.user.id})
		.populate(['size', 'race'])
		.then(pets => {
			return res.json(200, pets);
		})
		.catch(err => {
			return res.json(err.status, {err: err});
		});
	}
};
