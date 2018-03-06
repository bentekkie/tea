import * as express from "express";
import * as winston from "winston";
import {urlencoded, json} from "body-parser";
import * as morgan from "morgan";
import {Express, Request, Response} from "express";
import {ApiController} from "./api";
let PORT: number = process.env.PORT ? Number(process.env.PORT) : 3000;

export class Server {
  private app : Express;

  constructor(){
    this.app = express();
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
    this.app.use(morgan("combined"));
    this.app.use('/node-modules', express.static('./node_modules'));
    this.app.use(express.static('./client/app'));
    this.setupRoutes();
    this.app.listen(PORT, () => {
	    winston.log("info", "--> Server successfully started at port %d", PORT);
    });
  }

  private setupRoutes(){
    this.app.use("/api", ApiController);
  }
}
new Server();
