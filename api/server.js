const express = require("express");
const session = require('express-session')
const knexSessionStore = require('connect-session-knex')(session);
// const knexSessionConnect = require('connect-session-knex')
// const knexSessionStore = knexSessionConnect(session)

const sessionConfig = {
    name:'Cookies',
    secret:'sssh secret',
    cookie:{
    //   maxAge:1000*60*60,
     maxAge:1000*20,    
      secure:false, //do true in production
      httpOnly:true
  
    },
    resave:false,
    saveUninitialized:false,

    store: new knexSessionStore({
        knex: require('../data/db-config.js'),
        tableName:"session",
        sidFieldName:"sid",
        createTable:true,
        clearInterval: 1000 * 20
    })
  };
const UserRouter = require("../Routes/users-router.js");
const AuthRouter = require("../auth/auth-router.js");

const server = express();
server.use(session(sessionConfig));


server.use(express.json());


server.use("/api/users", UserRouter);
server.use("/api/auth", AuthRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
