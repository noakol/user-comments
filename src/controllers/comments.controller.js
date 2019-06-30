const Comments = require('../models/comments.model');
const md5 = require('blueimp-md5'); 

const retriveAll = function(req, res) {
    Comments.find({}, function(err, comments) {
        if (comments && comments.length) {
            res.send(comments.reverse());
        }
    });
};

const create = function(req, res) {
    console.log(req.body.username);
    const imgHash = md5((req.body.username).trim().toLowerCase());
    const imgUrl = 'https://www.gravatar.com/avatar/' + imgHash + '?d=mp';

    let comment = new Comments(
        {
            username: req.body.username,
            id: req.body.id,
            text: req.body.text,
            image: imgUrl
        }
    );

    comment.save(function(err) {
        if (err) {
            console.log(err);
            return err;
        }
        retriveAll(req, res);
    })
}

const retrive = function(req, res) {
    Comments.find(req.query, function(err, comments) {
        if (comments && comments.length) {
            res.send(comments.reverse());
        }
    });
};

module.exports = {
    retriveAll,
    create,
    retrive
}
