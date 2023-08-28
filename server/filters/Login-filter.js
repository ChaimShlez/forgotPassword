
const expressJwt = require("express-jwt")
const config = require("../config/config.json")
const { secret } = config

function loginFilter() {
    return expressJwt({ secret, algorithms: ["HS256"] }).unless({
        path: [
            { url:"/users", method: "POST "},
            { url:"/users/login", method: "POST" },
           // { url:"/users/forgotPassword/:userName", method: "GET" }
           new RegExp('^/users/forgotPassword/[^/]+$'),
          {url:"/users/resetPassword", method: "GET"} ,
          { url:"/users/updatePassword", method: "PUT" }
          //{ url: /^\/users\/resetPassword/, method: "GET" }
        ]
    });
};

module.exports = loginFilter