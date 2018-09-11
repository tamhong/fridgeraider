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

  app.get("/fridge/:username", function(req, res) {
    var user = req.params.username;

    db.Person.findOne({
      where: {username: req.params.username },
      attributes: ['id']}).then(
        function(dbPerson) {
          db.Items.findAll({
            where: { PersonId : dbPerson.id}
          }).then(
            function(dbItems) {
              res.render("fridge", dbItems);
            }
          )
        }
      );
  });
  
  // Load example page and pass in an example by id
  // app.get("/items/:id", function(req, res) {
  //   db.Items.findOne({ where: { id: req.params.id } }).then(function(dbItems) {
  //     res.render("example", {
  //       example: dbItems
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
