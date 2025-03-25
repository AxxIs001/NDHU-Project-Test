import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CourseNavigation = () => {
    const navigate = useNavigate();
    const courses = [
        { id: 'course1', name: 'Course 1' },
        { id: 'course2', name: 'Course 2' },
        { id: 'course3', name: 'Course 3' }
    ];
    const [selectedCourse, setSelectedCourse] = useState(null);

    return (
        <div className="flex h-screen">
            <div className="w-1/4 bg-gray-200 p-4">
                <h2 className="text-lg font-bold mb-4">Courses</h2>
                <ul>
                    {courses.map(course => (
                        <li key={course.id} className="mb-2">
                            <button
                                onClick={() => setSelectedCourse(course.id)}
                                className="text-blue-500 hover:underline"
                            >
                                {course.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 flex items-center justify-center">
                {selectedCourse ? (
                    <button
                        onClick={() => navigate(`/course/${selectedCourse}`)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Go to {selectedCourse}
                    </button>
                ) : (
                    <p>Select a course to continue</p>
                )}
            </div>
        </div>
    );
};

export default CourseNavigation;



/*import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { serverURL } from '../constants';

const CourseForClasses = ({ course }) => {
    const [loading, setLoading] = useState(false);

    const createCourse = async () => {
        if (!course || !course.syllabus) {
            toast.error("Course syllabus not found!");
            return;
        }

        setLoading(true);
        
        const syllabusWeeks = Object.keys(course.syllabus)
            .filter(key => key.startsWith('week'))
            .map(key => course.syllabus[key]);
        
        for (let i = 0; i < syllabusWeeks.length; i++) {
            const weekTopic = syllabusWeeks[i];
            if (!weekTopic) continue;

            const prompt = `Strictly in English, Explain about this topic for Week ${i + 1}: ${weekTopic} with examples. Please Strictly Don't Give Additional Resources And Images.`;
            const promptImage = `Example of ${weekTopic}`;

            const id = toast.loading("Generating content for Week " + (i + 1));
            
            try {
                await sendPrompt(prompt, promptImage, `Week ${i + 1}`, weekTopic, id);
                toast.update(id, { render: "Week " + (i + 1) + " generated!", type: "success", isLoading: false, autoClose: 3000 });
            } catch (error) {
                toast.update(id, { render: "Failed to generate Week " + (i + 1), type: "error", isLoading: false, autoClose: 3000 });
            }
        }

        setLoading(false);
        toast.success("Course Created Successfully!");
    };

    const sendPrompt = async (prompt, promptImage, week, topic, id) => {
        const dataToSend = { prompt };
        try {
            const response = await axios.post(`${serverURL}/api/generate`, dataToSend);
            if (response.data.text) {
                await sendImage(response.data.text, promptImage, week, topic, id);
            }
        } catch (error) {
            throw new Error("Prompt generation failed");
        }
    };

    const sendImage = async (theory, promptImage, week, topic, id) => {
        const dataToSend = { prompt: promptImage };
        try {
            const response = await axios.post(`${serverURL}/api/image`, dataToSend);
            if (response.data.url) {
                await saveCourseData(response.data.url, theory, week, topic, id);
            }
        } catch (error) {
            throw new Error("Image generation failed");
        }
    };

    const saveCourseData = async (image, theory, week, topic, id) => {
        try {
            await axios.post(`${serverURL}/api/save`, { week, topic, theory, image });
        } catch (error) {
            throw new Error("Saving course data failed");
        }
    };

    return (
        <button onClick={createCourse} disabled={loading} className="bg-black text-white px-5 py-2 mt-4 font-medium dark:bg-white dark:text-black">
            {loading ? "Creating Course..." : "Generate Course"}
        </button>
    );
};

export default CourseForClasses;
*/