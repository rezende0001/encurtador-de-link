const express = require("express");
const config = require("../config/config");
const urls = require("./urlRoutes");

const routes = app => {
  app.use(express.json(), urls);
};

module.exports = routes;
