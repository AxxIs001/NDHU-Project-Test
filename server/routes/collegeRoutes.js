const express = require("express");
const { College } = require("../models/university.js");

const router = express.Router();

// Ensure the route is defined correctly to match the incoming URL
router.get('/:collegeId', async (req, res) => {
  try {
    const collegeId = parseInt(req.params.collegeId); // Make sure the ID is parsed as an integer
    const college = await College.findOne({ id: collegeId });

    if (!college) {
      return res.status(404).json({ message: 'College not found' });
    }

    res.json(college); // Send the college data as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching college' });
  }
});
module.exports = router; // ✅ Use CommonJS export
