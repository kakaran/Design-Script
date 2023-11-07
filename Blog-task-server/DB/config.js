const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected Successfully`);
  } catch (error) {
    console.log(`Error in Connecting to mongoDB ${error}`);
  }
};

module.exports = dbConnect;
