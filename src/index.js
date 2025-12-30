const express = require("express");
const apiRoutes = require("./routes");
const { PORT } = require("./config/env");
const { logger } = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  logger.info(`------------ Server Started At ${PORT} ------------`);
});
