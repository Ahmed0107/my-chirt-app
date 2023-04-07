const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email })
    .then((user) => {
      bcrypt.compare(password, user.password).then((passwordCheck) => {
        if (!passwordCheck) {
          return res.status(400).send({
            message: "password does not match",
          });
        }

        // create json web token
        const token = jwt.sign(
          {
            userId: user._id,
            userName: user.username,
            userEmail: user.email,
          },
          "RANDOM-TOKEN",
          {
            expiresIn: "24h",
          }
        );

        res.status(201).send({
          message: "Login Successful",
        });
      });
    })
    .catch((e) => {
      res.status(400).send({
        message: "email not found",
      });
    });
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (await User.findOne({ email: email })) {
    res.send({
      message: "user exist",
    });
  } else {
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        const newUser = new User({
          username: username,
          email: email,
          password: hashedPassword,
        });

        newUser
          .save()
          .then(() => {
            res.status(201).send({
              message: "user saved",
            });
          })
          .catch((e) => {
            res.status(500).send({
              message: "error creating user",
              e,
            });
          });
      })
      .catch((e) => {
        res.status(500).send({
          message: "error creating user and hashed password",
          e,
        });
      });
  }
};

const forgotPasswordSendEmail = async (req, res) => {
  const { forgotEmail } = req.body;

  if (await User.findOne({ email: forgotEmail })) {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "ahmed.sameh2525@outlook.com",
        pass: "Ahmed#$%5050",
      },
    });

    const options = {
      from: "ahmed.sameh2525@outlook.com",
      to: forgotEmail,
      subject: "Electro Store Account Reset Password",
      text: "It is Simple",
      html: `<div>
      <p>Dear user:</p>
      <p>Please Follow this link to reset your password</p>
      <a href="http://localhost:3000/forgot-password-reset">Reset Your Password</a>
    </div>`,
    };

    let info = await transporter.sendMail(options);
    console.log("Message sent: %s", info.messageId);
  } else {
    res.status(500).send({
      message: "No email found please sign up",
    });
  }
};

const forgotPasswordReset = async (req, res) => {
  const { forgotEmail, newPassword } = req.body;
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  User.updateOne(
    { email: forgotEmail },
    {
      $set: {
        password: hashedPassword,
      },
    }
  ).then();
};

module.exports = {
  loginUser,
  registerUser,
  forgotPasswordSendEmail,
  forgotPasswordReset,
};
