const express = require("express");
const { College } = require("../models/university.js");


const router = express.Router();

router.post('/api/rate-course', async (req, res) => {
  const { collegeId, departmentId, programId, courseId, rating } = req.body;

  try {
    const college = await College.findOne({ id: collegeId });
    const department = college.departments.find(dep => dep.id === departmentId);
    const program = department.programs.find(prog => prog.id === programId);
    const course = program.courses.find(c => c.id === courseId);

    if (!course) return res.status(404).json({ message: 'Course not found' });

    if (!course.ratings) course.ratings = [];
    course.ratings.push(rating);

    await college.save();

    res.json({ message: 'Rating saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving rating' });
  }
});

module.exports = router;
