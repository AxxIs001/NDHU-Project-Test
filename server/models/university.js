import mongoose from "mongoose";

// Define Course Schema
const CourseSchema = new mongoose.Schema({
  id: String, // Unique identifier for the course
  cName: String, // Course name
  teacher: String, // Teacher's name
  courseNo: String, // Course number
  time: String, // Class timing
  credits: String, // Credits for the course
});

// Define Program Schema (Now includes "courses")
const ProgramSchema = new mongoose.Schema({
  id: String,
  name: String,
  courses: [CourseSchema], // Added courses array
});

// Define Department Schema (Now includes "programs")
const DepartmentSchema = new mongoose.Schema({
  id: String,
  title: String,
  programs: [ProgramSchema], // Added programs array
});

// Define College Schema
const CollegeSchema = new mongoose.Schema({
  id: String,
  name: String,
  departments: [DepartmentSchema],
});

export const College = mongoose.model("College", CollegeSchema);