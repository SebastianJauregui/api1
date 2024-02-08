const express = require("express");

module.exports = class ApiRest {
  constructor() {
    this.app = express();

    this.port = 9011;
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`ApiRest listening at http://localhost:${this.port}`);
    });
  }
};
