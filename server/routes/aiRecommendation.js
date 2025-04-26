const express = require("express");
const router = express.Router();
const { College } = require("../models/university.js");
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

require("dotenv").config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

router.post("/api/ai-recommendation", async (req, res) => {
  const { prompt } = req.body;

  try {
    const colleges = await College.find();
    if (!colleges || colleges.length === 0) {
      return res.status(404).json({ error: "No colleges found in the database." });
    }

    const allCourses = [];

    colleges.forEach(college => {
      college.departments?.forEach(dept => {
        dept.programs?.forEach(prog => {
          prog.courses?.forEach(course => {
            const difficulty =
              course.ratings?.length > 0
                ? (
                    course.ratings.reduce((sum, r) => sum + r.value, 0) / course.ratings.length
                  ).toFixed(2)
                : "No rating";

            const reviewTexts = course.reviews?.length
              ? course.reviews.map(r => `- ${r.text}`).join(" ")
              : "No student reviews available.";

            allCourses.push({
              id: course.id,
              cName: course.cName,
              credits: course.credits,
              teacher: course.teacher,
              difficulty,
              reviews: reviewTexts,
            });
          });
        });
      });
    });

    const courseListString = allCourses
      .map(
        (c, i) =>
          `${i + 1}. ${c.cName} | ${c.credits} credits | Teacher: ${c.teacher} | Difficulty: ${c.difficulty}\nStudent Feedback: ${c.reviews}`
      )
      .join("\n\n");

    const fullPrompt = `
You are a smart university course recommendation system.

Student's request: "${prompt}"

You have access to a list of university courses.

Each course includes:
- Course name
- Credits
- Teacher
- Difficulty (rated by students)
- Student reviews (may be missing)

Your tasks:
1. Generate a **short introduction** for each course based on the "${prompt}" and Student Feedback.
 -Example is no need, you can generate introduction according to the syllabus, and no need teacher name, because they already can see his name.
2. Carefully **analyze reviews** to summarize key points in "reviewSummary".
   - Examples:
- "Students say it's fun and easy."
- "Students mention heavy workload but rewarding content."
- "Students say the class is easy, but exams are hard."
- "Students praise the professor's clear explanations and helpful feedback."
- "Many students mention that group projects are challenging but valuable for learning."
- "Students often say the lectures are interesting, but the assignments are time-consuming."
- "Reviews highlight that the course is well-organized but requires a lot of reading."
- "Students appreciate the flexible grading but warn about difficult midterms."
- "Many found the course materials outdated but still useful for understanding basics."
- "Students say active participation is key to doing well."
- "Reviews mention that the course is fast-paced but manageable with consistent effort."
- "Students highlight that the professor is enthusiastic but grades strictly."
- "Many students mention that the course is beginner-friendly but lacks depth."
- "Students appreciate real-world examples but say the homework can be tedious."
- "Students feel the class discussions are engaging, but exams are unpredictable."
- "Reviews suggest that the course improves critical thinking but requires lots of writing."
- "Students mention that attendance is crucial to keep up with the content."
- "Students enjoy the hands-on labs but say the lectures can be dull."

✅!But not depend on the examples mostly, you can make your own according by reviews!

3. Difficulty guide:
   - 0–1.5 = Easy
   - 2–3 = Medium
   - 3.5–4 = Hard

Rules:
✅ Max 5 results unless a different number is specifically requested.
✅ Always write both "introduction" and "reviewSummary", even if reviews are missing.
✅ If reviews are missing, use what you can from difficulty/credits/teacher.

Course list:
${courseListString}

Format your reply strictly as JSON array:
[
  {
    "cName": "Course Name",
    "credits": "3",
    "difficulty": "easy",
    "teacher": "Dr. Smith",
    "introduction": "Short intro generated based on course and review info",
    "reviewSummary": "Summary based on student reviews"
  }
]
`;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", safetySettings });
    const result = await model.generateContent(fullPrompt);
    const generatedText = result.response.candidates[0].content.parts[0].text;

    let recommendations;

    try {
      const cleanedText = generatedText
        .replace(/```json\s*/i, '')
        .replace(/```$/, '')
        .trim();

      recommendations = JSON.parse(cleanedText);
    } catch (jsonErr) {
      console.error("JSON Parse Error:", jsonErr.message);
      console.log("Generated Text Was:\n", generatedText);
      return res.status(500).json({
        error: "AI response was not valid JSON.",
        raw: generatedText,
      });
    }

    res.status(200).json({ recommendations });

  } catch (err) {
    console.error("AI Recommendation Error:", err.message || err);
    res.status(500).json({ error: "Failed to generate recommendation" });
  }
});

module.exports = router;
