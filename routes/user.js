var express = require('express');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
//var Q = require('q');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET ALL Users */
router.get('/', function(req, res, next) {
  User.find(function (err, products) {
    if (err) return next(err);

    console.log(products);
    res.json(products);
  });
});

/* GET SINGLE User BY ID */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE User */
router.post('/', function(req, res, next) {
        User.findOne(
        { username: req.body.username },
        function (err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (user) {
                // username already exists
                res.send('Username "' + req.body.username + '" is already taken');
            } else {
                  User.create(req.body, function (err, post) {
                    if (err) return next(err);
                        res.json(post);
                    });
            }
        });
});

/* UPDATE USer */
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE USer */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/userauth', function(req, res, next) {
     User.findOne({username:req.body.username},function (err, user) {
        if (err) return next(err)
            // authentication successful
           res.json(user);
        });
});

module.exports = router;