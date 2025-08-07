"use strict";
let Models = require("../models");

const getPosts = (res) => {
  Models.Post.findAll({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createPost = (data, res) => {
  console.log(data);
  Models.Post.create(data)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updatePost = (req, res) => {
  Models.Post.update(req.body, { where: { id: req.params.id } })
    .then(data => {
      res.send({ result: 200, data: data });
    }).catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deletePost = (req, res) => {
  Models.Post.destroy({ where: { id: req.params.id } })
    .then(data => {
      res.send({ result: 200, data: data });
    }).catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getUserPosts = (req, res) => {
    Models.Post.findAll({ where: { userId: req.params.uid }, include: Models.User })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const filterUserPosts = (req, res) => {
  // finds all posts for a given user field (from query params), and populates including user details. joins two tables via the foreign key
  Models.Post.findAll({ include: { model: Models.User, where: req.query }})
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
          console.log(err);
          res.send({ result: 500, error: err.message });
      });
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getUserPosts,
  filterUserPosts
};
