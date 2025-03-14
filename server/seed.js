import mongoose from "mongoose";
import { College } from "./models/university.js";
import { universityData } from "../src/data/universityData.js";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.MONGODB_URI);

const seedDatabase = async () => {
  try {
    await College.deleteMany(); // Clear existing data
    await College.insertMany(universityData);
    console.log("Data inserted successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting data:", err);
    console.log("Mongo URI:", process.env.MONGO_URI);
  }
};

seedDatabase();