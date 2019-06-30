const Comments = require('../models/comments.model');
const md5 = require('blueimp-md5'); 

const retriveAll = function(req, res) {
    Comments.find({}, function(err, review) {
        if (review && review.length) {
            res.send(review.reverse());
        }
    });
};

const create = function(req, res) {
    console.log(req.body.username);
    const imgHash = md5((req.body.username).trim().toLowerCase());
    const imgUrl = 'https://www.gravatar.com/avatar/' + imgHash + '?d=mp';

    let review = new Comments(
        {
            username: req.body.username,
            id: req.body.id,
            text: req.body.text,
            image: imgUrl
        }
    );

    review.save(function(err) {
        if (err) {
            console.log(err);
            return err;
        }
        retriveAll(req, res);
    })
}

const retrive = function(req, res) {
    Comments.find(req.query, function(err, reviews) {
        if (review && review.length) {
            res.send(review.reverse());
        }
    });
};

module.exports = {
    retriveAll,
    create,
    retrive
}
