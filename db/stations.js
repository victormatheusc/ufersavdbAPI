var promise = require('bluebird');
var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgresql://postgres:admin@localhost:5432/ufersavdb_1';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getStations: getStations,
  getStation: getStation,
  createStation: createStation,
  updateStation: updateStation,
  removeStation: removeStation
};
