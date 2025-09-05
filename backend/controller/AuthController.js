const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");

// Signup controller
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    console.log("User from DB:", user); // <- add this
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match result:", isMatch); // <- add this

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    res.json({ msg: "Login successful", user: { email: user.email, username: user.username } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
