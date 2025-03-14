import mongoose from "mongoose";

// Define Program Schema
const ProgramSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

// Define Department Schema (Now includes "programs")
const DepartmentSchema = new mongoose.Schema({
  id: Number,
  title: String,
  program: [ProgramSchema], // Added programs array
});

// Define College Schema
const CollegeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  departments: [DepartmentSchema],
});

export const College = mongoose.model("College", CollegeSchema);
