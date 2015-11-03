var express = require('express');
var router = express.Router();

var Category = require('../models/category');

router.route('/')
    .get(function(req, res) {
        Category.find(function(err, categories) {
            if (err)
                res.send(err);

            res.json(categories);
        });
    })
    .post(function(req, res) {
        var category = new Category();
        category.name = req.body.name;

        category.save(function(err) {
            if (err)
                res.send(err);

            res.json({
                message: 'Category Created'
            });
        });
    });

router.route('/:category_id')
    .get(function(req, res) {
        Category.findById(req.params.category_id, function(err, category) {
            if (err)
                res.send(err);

            res.json(category);
        });
    })
    .put(function(req, res) {
        Category.findById(req.params.category_id, function(err, category) {
            if (err)
                res.send(err);

            category.name = req.body.name;
            category.save(function(err) {
                if (err)
                    res.send(err);

                res.json({
                    message: 'Category Updated'
                });
            })
        })
    })
    .delete(function(req, res) {
        Category.findById(req.params.category_id, function(err, category) {
            if (err)
                res.send(err);

            category.remove(function(err) {
                if (err)
                    res.send(err);

                res.json({
                    message: 'Category Deleted'
                });
            })
        })
    });

module.exports = router;
