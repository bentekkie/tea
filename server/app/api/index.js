"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const version = "0.1";
const router = express_1.Router();
router.get('/', (req, res) => {
    res.send('Api version: ' + version);
});
exports.ApiController = router;
