const express = require("express");
const { College } = require("../models/university.js");

const router = express.Router();

router.get('/:collegeId', async (req, res) => {
  try {
    const collegeId = req.params.collegeId; 
    const college = await College.findOne({ id: collegeId });

    if (!college) {
      return res.status(404).json({ message: 'College not found' });
    }

    res.json(college);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching college' });
  }
});

module.exports = router;
