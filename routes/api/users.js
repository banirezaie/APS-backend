const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

//@route POST api/users
//@desc Test route
//@access Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Password is required, the length should be at least 6 characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    //see if user exists
    try {
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
    res.send("Users Route");
  }
);

module.exports = router;
