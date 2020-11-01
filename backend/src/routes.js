const express = require("express");
const SessionController = require("./controllers/SessionController");
const UserController = require("./controllers/UserController");
const QuestionController = require("./controllers/QuestionController");
const NearbyController = require("./controllers/NearbyController");

const routes = express.Router();

routes.post("/signup", UserController.store);
routes.get("/verifysession", SessionController.show);
routes.post("/createsession", SessionController.store);
routes.get("/deletesession", SessionController.delete);
routes.post("/question", QuestionController.update);
routes.get("/nearbycases", NearbyController.show);

module.exports = routes;
