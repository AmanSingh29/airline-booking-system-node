const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

async function createAirplane(req, res) {
  try {
    const data = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    res.status(StatusCodes.CREATED).json({
      success: true,
      data,
      error: null,
      message: "Airplane created successfully!",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error,
      data: null,
      message: "Something went wrong while creating plane",
    });
  }
}

module.exports = {
  createAirplane,
};
