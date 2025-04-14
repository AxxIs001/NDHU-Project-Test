import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CollegeListsSidebar from '../components/collegeListSidebar';
import Header from '../components/header';
import Footers from '../components/footers';
import { serverURL } from '../constants';
import ReactStars from 'react-rating-stars-component';

const CoursePage = () => {
    const { collegeId, departmentId, programId, courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rating, setRating] = useState(0);
    const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
    const [generatedContent, setGeneratedContent] = useState("");

    const fetchCourse = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${serverURL}/api/colleges/${collegeId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const collegeData = await response.json();
            const department = collegeData.departments?.find(dep => dep.id === departmentId);
            const program = department?.programs?.find(prog => prog.id === programId);
            const courseData = program?.courses?.find(cour => cour.id === courseId);

            if (!courseData) {
                throw new Error("Course not found");
            }

            if (courseData.ratings && courseData.ratings.length > 0) {
                const sum = courseData.ratings.reduce((a, b) => a + b.value, 0);
                courseData.averageRating = sum / courseData.ratings.length;
            } else {
                courseData.averageRating = 0;
            }

            const userId = localStorage.getItem('userId');
            const existingRating = courseData.ratings.find(r => r.userId === userId);
            if (existingRating) {
                setRating(existingRating.value);
            }

            setCourse(courseData);
        } catch (err) {
            console.error('Error fetching data:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourse();
    }, [collegeId, departmentId, programId, courseId]);

    const handleSubmitRating = async () => {
        const userId = localStorage.getItem('userId');
        try {
            const response = await fetch(`${serverURL}/api/rate-course`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    collegeId,
                    departmentId,
                    programId,
                    courseId,
                    rating,
                    userId,
                }),
            });

            if (!response.ok) throw new Error('Failed to submit rating');

            alert("Rating submitted!");
            setIsRatingModalOpen(false);
            fetchCourse();
        } catch (err) {
            console.error(err);
            alert("Failed to submit rating");
        }
    };

    const generateContent = async () => {
        try {
            const prompt = `Generate a brief introduction about the course: ${course?.cName} according to syllabus of the course which is
          ${Object.keys(course.syllabus).map(week => course.syllabus[week])}. Include an overview of the subject matter and its importance.`;

            const response = await fetch(`${serverURL}/api/prompt`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            setGeneratedContent(data.generatedText);
        } catch (err) {
            console.error('Error generating content:', err);
            setError(err.message);
        }
    };

    const openRatingModal = () => {
        setIsRatingModalOpen(true);
    };

    const closeRatingModal = () => {
        setIsRatingModalOpen(false);
    };

    if (loading) return <p>Loading Course Page...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!course) return <p>Course not found.</p>;

    console.log("Course data in frontend:", course);

    return (
        <div>
            <Header isHome={true} className="sticky top-0 z-50" />
            <div className="flex flex-row h-screen max-md:hidden dark:text-white no-scrollbar">
                <CollegeListsSidebar />
                <div className="overflow-y-auto no-scrollbar flex-grow flex-col dark:bg-black">
                    <h1 className="text-2xl font-black mt-14 max-md:text-1xl flex items-center justify-center">
                        {course.cName}
                    </h1>

                    <div className="flex justify-center mt-2 flex-col items-center">
                        <p className="font-semibold">Difficulty of the class:</p>
                        <ReactStars
                            count={5}
                            value={course.averageRating}
                            size={30}
                            isHalf={true}
                            edit={false}
                            activeColor="#ffd700"
                        />
                    </div>

                    <div className="flex flex-col items-center mt-4">
                        <button
                            onClick={openRatingModal}
                            className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                        >
                            Rate this class
                        </button>

                        {isRatingModalOpen && (
                            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-4 rounded-md shadow-lg z-50 border border-gray-300 dark:border-gray-700 w-64">
                                <div className="flex justify-end">
                                    <button onClick={closeRatingModal} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-xs">
                                        <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    </button>
                                </div>
                                <p className="font-semibold mb-2 text-sm text-black dark:text-white">How difficult was this class? Share your experience:</p>
                                <ReactStars
                                    count={5}
                                    value={rating}
                                    onChange={(newRating) => {
                                        setRating(newRating);
                                    }}
                                    size={24}
                                    activeColor="#ffd700"
                                    isHalf={true}
                                />
                                <button
                                    onClick={handleSubmitRating}
                                    className="mt-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
                                >
                                    Submit
                                </button>
                            </div>
                        )}
                    </div>

                    <div className='flex'>
                        <div className="mt-16 flex flex-wrap border border-black dark:border-white p-5 w-[610px] ml-[50px]">
                            <u className='no-underline font-bold '>
                                <li className='mb-5'>Teacher: <span className="ml-3 font-semibold">{course.teacher}</span></li>
                                <li className='mb-5'>Email: <span className="ml-3 font-semibold">{course.email}</span></li>
                                <li className='mb-5'>Office: Sci/Eng Building II C308</li>
                                <li className='mb-5'>Office Hours: Thu 17:00 - 18:00</li>
                            </u>
                            {course.photo && (
                                <img src={course.photo} alt="" className="ml-[100px] border w-[150px] h-[150px]" />
                            )}
                        </div>

                        <div className="mt-16 flex flex-wrap border border-black dark:border-white p-5 w-[500px] ml-[50px] mr-[50px]">
                            <u className='no-underline font-bold '>
                                <li className='mb-5'>Course No: <span className="ml-3 font-semibold">{course.courseNo}</span></li>
                                <li className='mb-5'>Credits: <span className="ml-3 font-semibold">{course.credits}</span></li>
                                <li className='mb-5'>
                                    Introduction:
                                    <a target="blank" href={course.introduction} className=" hover:bg-gray-300 border border-gray-400 dark:text-white py-0.5 px-10 rounded ml-3 cursor-pointer font-semibold">
                                        Get link
                                    </a>
                                </li>
                                <li className='mb-5'>Time: <span className="ml-3 font-semibold">{course.time}</span></li>
                            </u>
                        </div>
                    </div>

                    <button
                        onClick={generateContent}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-[130px]"
                    >
                        Generate Course Introduction
                    </button>

                    {generatedContent && (
                        <div className="mt-4 p-4 border border-black dark:border-white w-4/5 ml-[130px]">
                            <p>{generatedContent}</p>
                        </div>
                    )}

                    <h1 className="text-2xl font-black mt-14 max-md:text-1xl flex items-center justify-center">
                        Syllabus
                    </h1>
                    <div className="mt-16 flex flex-wrap border border-black dark:border-white gap-5 flex-col p-5 w-4/5 ml-[130px]">
                        {course.syllabus && (
                            <>
                                {Object.keys(course.syllabus).map(week => {
                                    if (week.startsWith('week')) {
                                        const topic = course.syllabus[week];
                                        return (
                                            <div key={week}>
                                                <pre><span className='font-bold'>{week}: </span> {topic}</pre>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footers className="sticky bottom-0 z-50" />
        </div>
    );
};

export default CoursePage;