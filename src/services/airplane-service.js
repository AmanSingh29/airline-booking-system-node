const { logger } = require("../config");
const { AirplaneRepository } = require("../repositories");

const airplanRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplanRepository.create(data);
    return airplane;
  } catch (error) {
    logger.error(`ERR in plane service:createAirplane -> ${error.message}`);
    throw error;
  }
}

module.exports = {
  createAirplane,
};
