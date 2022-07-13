const express = require("express");
const db = require("./database/connect");
const { URLController } = require("./controllers/urlController");
const routes = require("./routes/index");

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("[MONGOOSE] Conexão com o banco feita com sucesso!");
});

const app = express();

app.use(express.json());

routes(app);

module.exports = app;
