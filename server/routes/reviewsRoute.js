const express = require("express");
const { College } = require("../models/university.js");

const router = express.Router();

// GET all reviews for a specific course
router.get("/api/courses/:collegeId/:departmentId/:programId/:courseId/reviews", async (req, res) => {
    const { collegeId, departmentId, programId, courseId } = req.params;
  
    try {
      const college = await College.findOne({ id: collegeId });
      const department = college?.departments.find(dep => dep.id === departmentId);
      const program = department?.programs.find(prog => prog.id === programId);
      const course = program?.courses.find(course => course.id === courseId);
  
      if (!course) return res.status(404).json({ error: "Course not found" });
  
      res.json(course.reviews || []);
    } catch (err) {
      console.error("Error fetching reviews:", err);
      res.status(500).json({ error: "Server error" });
    }
  });
  
// POST a new review
router.post("/api/courses/:collegeId/:departmentId/:programId/:courseId/reviews", async (req, res) => {
    const { collegeId, departmentId, programId, courseId } = req.params;
    const { userId, userName, text } = req.body;
  
    try {
      const college = await College.findOne({ id: collegeId });
      const department = college?.departments.find(dep => dep.id === departmentId);
      const program = department?.programs.find(prog => prog.id === programId);
      const course = program?.courses.find(course => course.id === courseId);
  
      if (!course) return res.status(404).json({ error: "Course not found" });
  
      course.reviews.push({ userId, userName, text }); // save both userId and userName
      await college.save();
  
      res.json({ message: "Review added successfully" });
    } catch (err) {
      console.error("Error submitting review:", err);
      res.status(500).json({ error: "Server error" });
    }
  });
  
  
  // DELETE a review embedded in a course
router.delete("/api/reviews/:reviewId", async (req, res) => {
    const { reviewId } = req.params;
  
    try {
      const college = await College.findOne({
        "departments.programs.courses.reviews._id": reviewId
      });
  
      if (!college) return res.status(404).json({ error: "Review not found" });
  
      for (const department of college.departments) {
        for (const program of department.programs) {
          for (const course of program.courses) {
            const reviewIndex = course.reviews.findIndex(
              (rev) => rev._id.toString() === reviewId
            );
            if (reviewIndex !== -1) {
              course.reviews.splice(reviewIndex, 1);
              await college.save();
              return res.status(200).json({ success: true });
            }
          }
        }
      }
  
      res.status(404).json({ error: "Review not found" });
    } catch (err) {
      console.error("Error deleting review:", err);
      res.status(500).json({ error: "Server error" });
    }
  });
  


module.exports = router;




