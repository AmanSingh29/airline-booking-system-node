const airplane = require("../models/airplane");
const CrudRepository = require("./crud-repository");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(airplane);
  }
}

module.exports = AirplaneRepository;
