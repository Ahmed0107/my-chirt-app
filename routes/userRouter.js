const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

//TODO : add register function user to router
router.post("/register", userController.registerUser);

//TODO : add login function user to router
router.post("/login", userController.loginUser);

//TODO : add forgot password function user to router
router.post(
  "/forgot-password-send-email",
  userController.forgotPasswordSendEmail
);

//TODO : add forgot password function user to router
router.put("/forgot-password-reset", userController.forgotPasswordReset);

module.exports = router;
