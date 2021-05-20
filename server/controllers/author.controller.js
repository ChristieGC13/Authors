const { author } = require('../models/author.model');


module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.list = (req, res) => {
    author.find({})
        .then(author => {
            res.json(author);
        })
        .catch(err => {
            res.status(400).json(err);
        })
}

module.exports.create = (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    author.create({
        name
    })
    .then(author => {
        res.json(author)
    })
    .catch(err => {
        res.status(400).json(err);
    })
}

module.exports.updateAuthor = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    author.findOneAndUpdate({_id: id}, {
        name
    }, {new:true, useFindAndModify: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.detail = (req, res) => {
    const { id } = req.params;
    author.findOne({ _id: id })
        .then(author => {
            res.json(author)
        })
        .catch(err => {
            res.status(400).json(err)
        } )
}

module.exports.delete = (req, res) => {
    const { id } = req.params;
    author.deleteOne({_id:id})
        .then(deleteConfirmation => {
            res.json(deleteConfirmation);
        })
        .catch(err => {
            res.status(400).json(err);
        })
}