const express = require("express");
const Route = require("./routes/route");
require("dotenv").config();

// Initialize App
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is Listening on http://localhost:${port}`);
});

// Initialize Router
const routerObject = new Route(app);
routerObject.init();
