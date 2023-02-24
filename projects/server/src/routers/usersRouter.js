const express = require('express')
const Router = express.Router()


// Import All Controller
const {usersController} = require('./../controllers') // Akan otomatis mengambil file index.js nya

// Import jwtVerify
const {tokenVerify} = require('./../middleware/verifyToken')
 
// Import Controller Register
Router.post('/register', usersController.register)

// Import Controller Login
Router.post('/login', usersController.login)

// // Import Controller Keep-Login
// Router.post('/keep-login', tokenVerify, usersController.keeplogin)

Router.patch("/activation/:id", usersController.activation)

// /Import Controller logout => POST
// Router.post('/logout',usersController.logout);

module.exports = Router