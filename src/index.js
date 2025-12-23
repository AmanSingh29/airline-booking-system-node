const express = require("express");
const { PORT } = require("./config");
const apiRoutes = require("./routes");

const app = express();

// Routes
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`------------ Server Started At ${PORT} ------------`);
});
