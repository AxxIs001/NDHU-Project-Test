import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  id: String,
  cName: String,
  teacher: String,
  courseNo: String,
  time: String,
  credits: String,
  photo: String,
  syllabus: mongoose.Schema.Types.Mixed,
  introduction: String,
  email: String,
  ratings: [
    {
      userId: String,
      value: Number
    }
  ],
  reviews: [
    {
      userId: String,
      userName: String, 
      text: String,
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  votes: {
    type: Map,
    of: String, 
    default: {},
  },
  
});

const ProgramSchema = new mongoose.Schema({
  id: String,
  name: String,
  courses: [CourseSchema], 
});

const DepartmentSchema = new mongoose.Schema({
  id: String,
  title: String,
  programs: [ProgramSchema], 
});

const CollegeSchema = new mongoose.Schema({
  id: String,
  name: String,
  departments: [DepartmentSchema],
});

export const College = mongoose.model("College", CollegeSchema);