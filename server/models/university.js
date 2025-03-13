import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
  id: Number,
  title: String,
});

const CollegeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  departments: [DepartmentSchema],
});

export const College = mongoose.model("College", CollegeSchema);


