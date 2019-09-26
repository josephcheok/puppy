// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var dog = {
  all: function(cb) {
    orm.all("favedogs", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("favedogs", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("favedogs", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("favedogs", condition, function(res) {
      cb(res);
    });
  },
  search: function(searchTerm, cb) {
    orm.search("dogbreed", searchTerm, function(res) {
      cb(res);
    });
  },
  extract: function(condition, cb) {
    orm.extract("dogbreed", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (favedogsController.js).
module.exports = dog;
