const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"));

const mongoDB = require("./DB/config");
mongoDB();

const Routes = require("./Routes/Routes");
app.use("/api", Routes);

app.get("/", (req, res) => {
  return res.status(200).send("Hello EveryOne");
});

app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`Server started on port 3000 ${PORT}`);
});
