const express = require("express");
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
const config = require("../config.js");
const contacts = require("./components/contacts/network");
const app = express();

const swaggerDoc = require("./swagger.json");

app.use(bodyParser.json());
app.use("/api/contacts", contacts);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(config.api.port, () => {
  console.log("Api escuchando en el puerto ", config.api.port);
});
