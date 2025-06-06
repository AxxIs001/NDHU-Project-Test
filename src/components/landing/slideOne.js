import React from 'react';
import { useNavigate } from "react-router-dom";

const SlideOne = () => {

    const navigate = useNavigate();

    function redirectSignIn() {
        navigate("/signin");
    }
    function redirectSignUp() {
        navigate("/signup");
    }


    return (
        <div className="flex flex-col items-center dark:bg-black ">

            <h1 className="text-6xl font-black mt-20 max-md:text-3xl text-center dark:text-white">
            Ai Course Recommendation<br /><span className="block text-center">& Assistance</span>
            </h1>
            <p className="text-center text-black mt-6 max-w-2xl font-medium max-md:text-xs dark:text-white">
            Explore honest student reviews, AI-powered suggestions , and everything you need to choose the right course - before it's too late</p>

            <div className="flex space-x-4 mb-4 mt-6">
                <button onClick={redirectSignIn} className="border-black text-black border px-3 py-2 font-medium dark:border-white dark:text-white">
                    SignIn
                </button>
                <button onClick={redirectSignUp} className="bg-black text-white px-3 py-2 font-medium dark:bg-white dark:text-black">
                    SignUp
                </button>
            </div>
        </div>
    );
};

export default SlideOne;
