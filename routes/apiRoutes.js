var db = require("../models");

module.exports = function(app) {
  app.get("/api/persons", function(req, res) {
    db.Person.findAll({}).then(function(dbPerson) {
      res.json(dbPerson);
    });
  });

  app.post("/api/persons", function(req, res) {
    db.Person.create(req.body).then(function(dbPerson) {
      res.json(dbPerson);
    });
  });

  app.delete("/api/persons/:id", function(req, res) {
    db.Person.destroy({ where: { id: req.params.id } }).then(function(
      dbPerson
    ) {
      res.json(dbPerson);
    });
  });

  //================================================================================//

  app.get("/api/items/:username", function (req, res) {


    db.Person.findOne({
      where: {username: req.params.username },
      attributes: ['id']}).then(
        function(dbPerson) {
          return dbPerson.id;
        }
      );
    // let userId = db.Person.findOne({where: { username: req.params.username }, attributes: ['id'] });

    // console.log(userId);

    // db.Items.findAll({ where: { PersonId: userId} }).then(function(dbItems) {
    //   res.json(dbItems)
    // });

  });


  app.post("/api/items/:username", function(req, res) {
    db.Items.create(req.body).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  //================================================================================//

  app.get("/api/items", function(req, res) {
    db.Items.findAll({}).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  app.post("/api/items", function(req, res) {
    db.Items.create(req.body).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  app.delete("/api/items/:id", function(req, res) {
    db.Items.destroy({ where: { id: req.params.id } }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  app.put("/api/items/:id", function(req, res) {
    db.Items.update(req.body, { where: { id: req.params.id } }).then(function(
      dbItem
    ) {
      res.json(dbItem);
    });
  });
};
