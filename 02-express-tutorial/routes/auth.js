const express = require('express')
const router = express.Router()

router.post("/", (req, res) => {
    const { name } = req.body;
    if (name) {
      return res.status(200).json({
        success: true,
        message: `Welcome ${name}`,
      });
    }
    res.status(400).json({
      succees: false,
      message: "Please provide your credentials",
    });
  });

  module.exports = router