import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { serverURL } from '../constants';
import { formatDistanceToNow } from 'date-fns';

const ReviewSection = () => {
  const { collegeId, departmentId, programId, courseId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState({});
  const [courseName, setCourseName] = useState('');

  const userId = localStorage.getItem('userId');

  const fetchReviews = async () => {
    const res = await fetch(`${serverURL}/api/courses/${collegeId}/${departmentId}/${programId}/${courseId}/reviews`);
    const data = await res.json();
    setReviews(data.reverse()); // Reverse once here
  };
  

  const fetchCourseName = async () => {
    try {
        const response = await fetch(`${serverURL}/api/colleges/${collegeId}`);
        
        const collegeData = await response.json();
        const department = collegeData.departments?.find(dep => dep.id === departmentId);
        const program = department?.programs?.find(prog => prog.id === programId);
        const courseData = program?.courses?.find(cour => cour.id === courseId);
        setCourseName(courseData);
    } catch (err) {
        console.error('Error fetching data:', err);      
    } 
};


  const submitReview = async () => {
    const userName = sessionStorage.getItem('mName');
    if (!userId || !userName || !newReview.trim()) return;

    await fetch(`${serverURL}/api/courses/${collegeId}/${departmentId}/${programId}/${courseId}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, userName, text: newReview }),
    });

    setNewReview('');
    fetchReviews();
  };
  const toggleDropdown = (index) => {
    setDropdownVisible((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const deleteReview = async (reviewId) => {
    await fetch(`${serverURL}/api/reviews/${reviewId}`, {
      method: 'DELETE',
    });
    fetchReviews();
    setDropdownVisible(false);
  };

  useEffect(() => {
    fetchReviews();
    fetchCourseName()
  }, []);


  return (
    <main className="w-full min-h-screen grid place-items-center bg-[#abd1c6] px-4">
      <section className="comment-module w-full md:w-4/5 lg:w-2/3 xl:w-1/2 bg-white rounded-md my-24 px-6 md:px-10 py-12">
        <h1 className="text-3xl font-bold mb-8 text-black">{(courseName?.cName || 'Course')} Reviews</h1>   
        <div className="mt-5 mb-12">
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded-md p-3 text-black"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here..."
          />
          <div className="flex justify-between">
          <button
            onClick={submitReview}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Submit Review
          </button>
          
            <Link
              to={`/college/${collegeId}/${departmentId}/${programId}/${courseId}`}
              className="mt-4 bg-gray-700 hover:bg-gray-600 text-white  px-6 py-2 rounded-md"
            >
              ← Back to Course Page
            </Link>
          </div>
        </div>
        <ul className="w-full flex flex-col gap-8 list-none">
          {reviews.length === 0 ? (
            <p className="text-gray-600">No reviews yet. Be the first to share your experience!</p>
          ) : (
            reviews.map((review, index) => (
              <li key={review._id} className="w-full relative">
                <div className="comment flex gap-5">
                  <div className="comment-img w-1/12"></div>
                  <div className="comment-content w-11/12 flex flex-col gap-3">
                    <div className="comment-details flex justify-between items-center text-black">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h4 className="capitalize font-medium">{review.userName}</h4>
                        <span className="text-sm text-gray-500">
                          {review.createdAt
                            ? formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })
                            : 'Just now'}
                        </span>
                      </div>
                      {review.userId === userId && (
                        <div className="relative">
                          <button
                            className="text-black text-xl"
                            onClick={() => toggleDropdown(index)}
                          >
                            ...
                          </button>
                          {dropdownVisible[index] && (
                            <div className="absolute right-0 bg-white border rounded shadow p-2">
                              <button
                                className="text-red-600 hover:underline"
                                onClick={() => deleteReview(review._id)}
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="comment-desc text-black">
                      <p>{review.text}</p>
                    </div>
                    
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
};

export default ReviewSection;