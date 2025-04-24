import React, { useState } from 'react';
import Footers from '../components/footers';
import Header from '../components/header';
import CollegeListSidebar from '../components/collegeListSidebar';
import { serverURL } from '../constants';

const Home = () => {
  const [credits, setCredits] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [teacher, setTeacher] = useState('');
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleRecommendation = async () => {
    const userPrompt = prompt || `I’m looking for a course with ${credits} credits, difficulty ${difficulty}, taught by ${teacher}`;
    try {
        const response = await fetch(`${serverURL}/api/ai-recommendation`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: userPrompt })
          });
      const data = await response.json();
      setSuggestions(data.recommendations || []);
    } catch (err) {
      console.error('Recommendation error:', err);
    }
  };

  return (
    <div className='h-screen flex flex-col'>
      <Header isHome={true} className="sticky top-0" />
      <div className='dark:bg-black flex-1'>
        <div className='mx-2 flex'>
          <CollegeListSidebar />

          {/* Recommendation Panel */}
          <div className='flex-1 p-4'>
            <h2 className="text-xl font-bold mb-4 text-white">Find a Course by Your Needs</h2>

            {/* Filter Form */}
            <div className='grid gap-2 md:grid-cols-3 mb-4'>
              <input
                type="text"
                placeholder="Credits (e.g. 2)"
                className="p-2 rounded"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
              />
              <select
                className="p-2 rounded"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="">Select Difficulty</option>
                <option value="0-1.5">Easy</option>
                <option value="2-3.5">Medium</option>
                <option value="4-5">Hard</option>
              </select>
              <input
                type="text"
                placeholder="Teacher name"
                className="p-2 rounded"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
              />
            </div>

            {/* Free Prompt Input */}
            <textarea
              placeholder="Or describe what you're looking for (e.g. A 2 credit easy course about AI)"
              className="w-full p-2 rounded mb-4"
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            <button
              onClick={handleRecommendation}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Get Recommendation
            </button>

            {/* Suggested Courses */}
            <div className='mt-6'>
              <h3 className='text-lg font-semibold text-white'>Suggested Courses</h3>
              <div className='grid gap-4 mt-2'>
                {suggestions.map((course, idx) => (
                  <div key={idx} className='bg-white p-4 rounded shadow'>
                    <h4 className='font-bold text-lg'>{course.cName}</h4>
                    <p><strong>Credits:</strong> {course.credits}</p>
                    <p><strong>Teacher:</strong> {course.teacher}</p>
                    <p><strong>Difficulty:</strong> {course.difficulty}</p>
                    <p>{course.introduction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>  
      </div>
      <Footers className="sticky bottom-0" />
    </div>
  );
};

export default Home;





/*import React from 'react';
import Footers from '../components/footers';
import Header from '../components/header';
import CollegeListSidebar from '../components/collegeListSidebar';


const Home = () => {
 
    return (
        <div className='h-screen flex flex-col'>
            <Header isHome={true} className="sticky top-0 " />
            <div className='dark:bg-black flex-1'>
                <div className='mx-2 flex'>
                <CollegeListSidebar  /> 
              
                </div>  
            </div>
            <Footers className="sticky bottom-0 " />
        </div>
    );
};

export default Home;
 
*/