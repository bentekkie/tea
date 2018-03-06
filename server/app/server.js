"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const winston = require("winston");
const body_parser_1 = require("body-parser");
const morgan = require("morgan");
const api_1 = require("./api");
let PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
class Server {
    constructor() {
        this.app = express();
        this.app.use(body_parser_1.urlencoded({ extended: true }));
        this.app.use(body_parser_1.json());
        this.app.use(morgan("combined"));
        this.app.use('/node-modules', express.static('./node_modules'));
        this.app.use(express.static('./client/app'));
        this.setupRoutes();
        this.app.listen(PORT, () => {
            winston.log("info", "--> Server successfully started at port %d", PORT);
        });
    }
    setupRoutes() {
        this.app.use("/api", api_1.ApiController);
    }
}
exports.Server = Server;
new Server();
