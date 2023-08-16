const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
});

module.exports = api;
