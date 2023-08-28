const express = require("express");
const cors = require('cors');

const usersController = require("./controllers/users-controller");
const exceptionHandler=require("./exceptions/exceptions-handler");
const loginFilter = require("./filters/Login-filter");
const server = express();

server.use(cors({ origin: "http://localhost:3000"}));
server.use(loginFilter());
server.use(express.json());
server.use("/users", usersController);


server.use(exceptionHandler)


server.listen(3001, () => console.log("Listening on http://localhost:3001"));