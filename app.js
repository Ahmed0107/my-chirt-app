require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/userRouter.js");
const productRouter = require("./routes/productRouter.js");

// use express.json middleware to read a json requests body
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.use("/user", userRouter);
app.use("/products", productRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `server is up and running and is listening to http://localhost:${PORT}`
  );
});
