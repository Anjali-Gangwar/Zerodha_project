require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../model/UserModel"); 

require("dotenv").config();
const uri = process.env.MONGO_URL;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

async function updatePasswords() {
  const users = await User.find({});

  for (let user of users) {
    if (!user.password.startsWith("$2b$")) {
      user.password = await bcrypt.hash(user.password, 12);
      await user.save();
      console.log(`Password updated for: ${user.email}`);
    }
  }

  console.log("All passwords updated!");
  mongoose.disconnect();
}

updatePasswords();
