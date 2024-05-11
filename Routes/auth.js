const router = require("express").Router();
const User = require("../Model/User");

router.post("/register", async (req, res) => {
  const newUser = new User({
    email_id: req.body.email_id,
    password: req.body.password,
    checkbox1: req.body.checkbox1,
    checkbox2: req.body.checkbox2,
    checkbox3: req.body.checkbox3,
    checkbox4: req.body.checkbox4,
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  const { email_id, password } = req.body;
  try {
    const user = await User.findOne({ email_id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    let isAdmin = false;
    if (user.isAdmin === true) {
      isAdmin = true;
    }

    res.status(200).json({ message: "Login successful", isAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


router.get("/login", async (req, res) => {
  const email_id = req.query.login;
  try {
    const user = await User.findOne({ email_id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
