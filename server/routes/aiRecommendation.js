// routes/aiRecommendation.js
const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');

require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

router.post('/api/ai-recommendation', async (req, res) => {
  const { prompt } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", safetySettings });
    const result = await model.generateContent(prompt);
    const generatedText = result.response.candidates[0].content.parts[0].text;

    // For now, send back just text. You can parse to course objects later
    res.json({ recommendations: [{ cName: "Suggested Course", introduction: generatedText }] });
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;



/*const express = require("express");
const router = express.Router();
const { College } = require("../models/university.js");

const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

router.post("/api/ai-recommendation", async (req, res) => {
  const { prompt } = req.body;

  try {
    const colleges = await College.find();

    const allCourses = [];
    colleges.forEach(college => {
      college.departments.forEach(dept => {
        dept.programs.forEach(prog => {
          prog.courses.forEach(course => {
            const difficulty =
              course.ratings.length > 0
                ? (
                    course.ratings.reduce((sum, r) => sum + r.value, 0) /
                    course.ratings.length
                  ).toFixed(2)
                : "No rating";

            allCourses.push({
              id: course.id,
              cName: course.cName,
              credits: course.credits,
              teacher: course.teacher,
              introduction: course.introduction,
              difficulty,
            });
          });
        });
      });
    });

    const courseListString = allCourses
      .map(
        (c, i) =>
          `${i + 1}. ${c.cName} | ${c.credits} credits | Difficulty: ${c.difficulty} | Teacher: ${c.teacher} | ${c.introduction}`
      )
      .join("\n");

    const fullPrompt = `
You are a course recommendation assistant. A student asked: "${prompt}"

From the list of courses below, suggest the most suitable ones and explain why. Only return up to 5 courses.

Courses:
${courseListString}

Respond in JSON format like this:
[
  {
    "cName": "Course Name",
    "credits": "2",
    "difficulty": "1.5",
    "teacher": "Dr. John",
    "introduction": "Intro to the course"
  }
]
`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", safetySettings });
    const result = await model.generateContent(fullPrompt);
    const generatedText = result.response.candidates[0].content.parts[0].text;

    const recommendations = JSON.parse(generatedText); // might throw if not JSON
    res.status(200).json({ recommendations });

  } catch (err) {
    console.error("AI Recommendation Error:", err);
    res.status(500).json({ error: "Failed to generate recommendation" });
  }
});

module.exports = router;
*/