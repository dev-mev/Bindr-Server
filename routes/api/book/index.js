const express = require('express')
const router = express.Router()
const db = require('../../../db/models')

router.get('/recommendations', function (req, res) {
  db.Book.find({}, function (err, docs) {
    if (!err) {
      res.json(docs);
    } else { throw err; }
  });
});

router.post('/ignore', (req, res) => {
	db.Book.findOne({ _id: req.body.bookID}).then((book) => {
		return db.User.findOneAndUpdate(
			{ _id: req.body.uid}, 
			{ $push: {ignored: book._id}}, 
			{ new: true });
	})
	.catch(function(err) {
    res.json(err);
  });
})

router.get("/", function(req, res) {
	db.Book.findOneAndUpdatefindOne({ _id: req.body.id })
	.populate("comments")
	.then(function(dbBook) {
		res.json(dbBook);
	})
	.catch(function(err) {
		res.json(err);
	});
});

module.exports = router;
