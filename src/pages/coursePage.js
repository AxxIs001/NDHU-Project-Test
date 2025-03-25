import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CollegeListsSidebar from '../components/collegeListSidebar';
import Header from '../components/header';
import Footers from '../components/footers';
import { serverURL } from '../constants';

const CoursePage = () => {
    const { collegeId, departmentId, programId, courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [generatedContent, setGeneratedContent] = useState({}); // Store generated content

    useEffect(() => {
        const fetchCourse = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`http://localhost:5000/api/colleges/${collegeId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const collegeData = await response.json();

                const department = collegeData.departments?.find(dept => dept.id === departmentId);
                const program = department?.programs?.find(prog => prog.id === programId);
                const courseData = program?.courses?.find(cour => cour.id === courseId);

                if (!courseData) {
                    throw new Error("Course not found");
                }
                setCourse(courseData);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [collegeId, departmentId, programId, courseId]);
    const generateContent = async (week, topic) => {
        try {
            const prompt = `Generate educational content for week ${week} on the topic: ${topic}. Provide detailed explanation, examples, and potential exercises.`;
            const response = await fetch( serverURL + '/api/prompt', { // Assuming you have an API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setGeneratedContent(prev => ({ ...prev, [week]: data.generatedText })); // Store the generated content
        } catch (err) {
            console.error('Error generating content:', err);
            setError(err.message);
        }
    };

    if (loading) return <p>Loading Course Page...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!course) return <p>Course not found.</p>;

    return (
        <div>
            <Header isHome={true} className="sticky top-0 z-50" />
            <div className="flex flex-row h-screen max-md:hidden dark:text-white no-scrollbar">
                <CollegeListsSidebar />
                <div className="overflow-y-auto no-scrollbar flex-grow flex-col dark:bg-black">
                    <h1 className="text-2xl font-black mt-14 max-md:text-1xl flex items-center justify-center">
                        {course.cName}
                    </h1>
                    <div className="mt-16 flex flex-wrap border border-black dark:border-white p-5 w-[610px] ml-[130px]">
                        <u className='no-underline text-xl font-semibold '>
                            <li className='mb-5'>
                                Teacher: <span className="ml-3">{course.teacher} </span>
                            </li>
                            <li className='mb-5'>
                                Email: abcdefg@gmail.com
                            </li >
                            <li className='mb-5' >
                                Office: Sci/Eng Building II C308
                            </li>
                            <li className='mb-5' >
                                Office Hours: Thu 17:00 - 18:00
                            </li>
                        </u>
                        {course.photo && (
                            <img
                                src={course.photo}
                                alt=""
                                className="ml-[100px] w-[150px] h-[150px]"
                            />
                        )}
                    </div>

                    <h1 className="text-2xl font-black mt-14 max-md:text-1xl flex items-center justify-center">
                        Syllabus
                    </h1>
                    <div className="mt-16 flex flex-wrap border gap-5 flex-col p-5 w-4/5 ml-[130px]">
                        {course.syllabus && (
                            <>
                                {Object.keys(course.syllabus).map(week => {
                                    if (week.startsWith('week')) {
                                        const topic = course.syllabus[week];
                                        return (
                                            <div key={week}>
                                                <pre><span className='font-bold'>{week}: </span> {topic}</pre>
                                                <button 
                                                    onClick={() => generateContent(week, topic)}
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Generate Content
                                                </button>
                                                {generatedContent[week] && (
                                                    <div className="mt-4">
                                                        <pre>{generatedContent[week]}</pre>
                                                    </div>
                                                )}
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

/*import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CollegeListsSidebar from '../components/collegeListSidebar';
import Header from '../components/header';
import Footers from '../components/footers';

const CoursePage = () => {
    const { collegeId, departmentId, programId, courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchCourse = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`http://localhost:5000/api/colleges/${collegeId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const collegeData = await response.json();

                const department = collegeData.departments?.find(dept => dept.id === departmentId);
                const program = department?.programs?.find(prog => prog.id === programId);
                const courseData = program?.courses?.find(cour => cour.id === courseId);

                if (!courseData) {
                    throw new Error("Course not found");
                }
                setCourse(courseData);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [collegeId, departmentId, programId, courseId]);

    if (loading) return <p>Loading Course Page...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!course) return <p>Course not found.</p>;
    

    return (
        <div>
            <Header isHome={true} className="sticky top-0 z-50" />
            <div className="flex flex-row h-screen max-md:hidden dark:text-white no-scrollbar">
                <CollegeListsSidebar />
                <div className="overflow-y-auto no-scrollbar flex-grow flex-col dark:bg-black">
                    <h1 className="text-2xl font-black mt-14 max-md:text-1xl flex items-center justify-center">
                        {course.cName}
                    </h1>
                    <div className="mt-16 flex flex-wrap border border-black dark:border-white p-5 w-[610px] ml-[130px]">
                        <u className='no-underline text-xl font-semibold '>
                        <li className='mb-5'>
                            Teacher: <span className="ml-3">{course.teacher} </span>
                        </li>
                        <li className='mb-5'>
                            Email: abcdefg@gmail.com
                        </li >
                        <li className='mb-5' >
                            Office: Sci/Eng Building II C308
                        </li>
                        <li className='mb-5' >
                            Office Hours: Thu 17:00 - 18:00
                        </li>
                        </u>
                        {course.photo && (
                            <img
                                src={course.photo}
                                alt=""
                                className="ml-[100px] w-[150px] h-[150px]"
                            />
                        )}
                    </div>
                
                    <h1 className="text-2xl font-black mt-14 max-md:text-1xl flex items-center justify-center">
                        Syllabus
                    </h1>
                    <div className="mt-16 flex flex-wrap border gap-5 flex-col p-5 w-4/5 ml-[130px]">
                    {course.syllabus && (
                             <>
                             <div>
                                 <pre><span className='font-bold'>Week 1:  </span> {course.syllabus.week1}</pre>
                            </div><div>                              
                                 <pre><span className='font-bold'>Week 2:  </span> {course.syllabus.week2}</pre>
                            </div><div>                                
                                 <pre><span className='font-bold'>Week 3:  </span> {course.syllabus.week3}</pre>
                            </div><div>
                                 <pre><span className='font-bold'>Week 4:  </span> {course.syllabus.week4}</pre>
                            </div><div>  
                                 <pre><span className='font-bold'>Week 5:  </span> {course.syllabus.week5}</pre>
                            </div><div>
                                 <pre><span className='font-bold'>Week 6:  </span> {course.syllabus.week6}</pre>
                            </div><div>
                                 <pre><span className='font-bold'>Week 7:  </span> {course.syllabus.week7}</pre>
                            </div><div>
                                 <pre><span className='font-bold'>Week 8:  </span> {course.syllabus.week8}</pre>
                            </div><div>
                                 <pre><span className='font-bold'>Week 9:  </span> {course.syllabus.week9}</pre>
                            </div><div>
                                 <pre><span className='font-bold'>Week 10: </span> {course.syllabus.week10}</pre>
                            </div><div>
                                 <pre><span className='font-bold'>Week 11: </span> {course.syllabus.week11}</pre>
                            </div><div>
                                 <pre><span className='font-bold'>Week 12: </span> {course.syllabus.week12}</pre>
                            </div><div>
                                 <pre><span className='font-bold'>Week 13: </span> {course.syllabus.week13}</pre>
                            </div><div>
                                 <pre><span className='font-bold'>Week 14: </span> {course.syllabus.week14}</pre>
                            </div><div>
                                 <pre><span className='font-bold'>Week 15: </span> {course.syllabus.week15}</pre>
                            </div><div>
                                 <pre><span className='font-bold'>Week 16: </span> {course.syllabus.week16}</pre>
                            </div>                                          
                                 <pre><span className='font-bold'>Week 17: </span> {course.syllabus.week17}</pre>
                            <div>
                                 <pre><span className='font-bold'>Week 18: </span> {course.syllabus.week18}</pre>
                            </div>
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


*/


