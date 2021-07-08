const express = require("express");
const Route = require("./routes/route");
const logger = require("../logger")("App");
require("dotenv").config();

// Initialize App
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Server is Listening on http://localhost:${port}`);
});

// Initialize Router
const routerObject = new Route(app);
routerObject.init();

module.exports = app;
