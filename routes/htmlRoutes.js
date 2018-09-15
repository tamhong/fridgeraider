var db = require("../models");
var moment = require("moment");

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
      where: { username: user },
      attributes: ["id", "fridgeName", "username"]
    }).then(function(dbPerson) {
      if (dbPerson) {
        db.Items.findAll({
          where: { PersonId: dbPerson.id }
        }).then(function(dbItems) {
          var hbsObject = {
            items: dbItems,
            userInfo: dbPerson.dataValues
          };

          console.log(hbsObject);

          res.render("fridge", hbsObject);
        });
      } else {
        res.status(400);
        return res.json({ Error: "Username does not exist!" });
      }
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
