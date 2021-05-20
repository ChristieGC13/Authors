const { author } = require('../models/author.model');


module.exports = {
index : (req, res) => {
    res.json({
        message: "Hello World"
    });
},
list : (req, res) => {
    author.find().sort({name:1})
        .then(author => {
            res.json(author);
        })
        .catch(err => {
            res.status(400).json(err);
        })
},
create : (req, res) => {
    author.create(req.body)
    .then(data => {res.json({results: data})})
    .catch(err => {res.json(err.errors)})
},
updateAuthor : (req, res) => {
    const { id } = req.params;
    // const { name, likes } = req.body;
    author.findOneAndUpdate({_id: id}, req.body, {runValidators:true, useFindAndModify: true})

        .then(data => {res.json({results: data})})
        .catch(err => {res.json(err.errors)})
},
detail : (req, res) => {
    const { id } = req.params;
    
    author.findOne({ _id: id })
    .then(author => {
        res.json(author)
    })
    .catch(err => {res.json(err.errors)})
},
delete : (req, res) => {
    const { id } = req.params;
    author.deleteOne({_id:id})
        .then(deleteConfirmation => {
            res.json(deleteConfirmation);
        })
        .catch(err => {
            res.status(400).json(err);
        })
}}