const express = require("express");
const {registerUser, loginUser, logout, createPdf} = require("../controllers/userController");
const passport = require("passport");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router
    .route("/register")
    .post(registerUser);

router
    .route("/login")
    .post(loginUser);

router
    .route("/logout")
    .get(logout);

router
    .route("/generatepdf")
    //.post(isAuthenticatedUser,createPdf);
    .post(createPdf);




module.exports = router;