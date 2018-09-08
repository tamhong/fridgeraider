var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Items.findAll({}).then(function(dbItems) {
    res.render("index");
  });
  app.get("/login", function(req, res) {
    // db.Items.findAll({}).then(function(dbItems) {
    res.render("login");
  });

  app.get("/signup", function(req, res) {
    // db.Items.findAll({}).then(function(dbItems) {
    res.render("signup");
  });

  app.get("/recipe", function(req, res) {
    // db.Items.findAll({}).then(function(dbItems) {
    res.render("recipe");
  });

  app.get("/fridge", function(req, res) {
    // db.Items.findAll({}).then(function(dbItems) {
    res.render("fridge");
  });
  // Load example page and pass in an example by id
  app.get("/items/:id", function(req, res) {
    db.Items.findOne({ where: { id: req.params.id } }).then(function(dbItems) {
      res.render("example", {
        example: dbItems
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
