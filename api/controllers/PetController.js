/**
 * PetController
 *
 * @description :: Server-side logic for managing pets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function (req,res) {
		if (req.user.role.slug == 'client') {
			Pet.find({owner : req.user.id})
			.populate(['size', 'race', 'photos'])
			.then(pets => {
				return res.json(200, pets);
			})
			.catch(err => {
				return res.json(err.status, {err: err});
			});
		} else {
			Pet.find()
			.populate(['size', 'race', 'photos'])
			.then(pets => {
				return res.json(200, pets);
			})
			.catch(err => {
				return res.json(err.status, {err: err});
			});
		}
	}
};
