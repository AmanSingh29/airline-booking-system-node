const { logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      logger.error(`Err in crud repository: create -> ${error.message}`);
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      logger.error(`Err in crud repository: destroy -> ${error.message}`);
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      logger.error(`Err in crud repository: get -> ${error.message}`);
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      logger.error(`Err in crud repository: getAll -> ${error.message}`);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id,
        },
      });
      return response;
    } catch (error) {
      logger.error(`Err in crud repository: update -> ${error.message}`);
      throw error;
    }
  }
}

module.exports = CrudRepository;
