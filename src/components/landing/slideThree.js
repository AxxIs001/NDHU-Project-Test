import React from "react";
import { PiKeyboard, PiVideo    } from "react-icons/pi";
import { RiAiGenerate } from "react-icons/ri";

const SlideThree = () => {
    return (
        <div className="dark:bg-black">
            <div className="flex items-center justify-center text-center">
                <div className="text-4xl font-black dark:text-white max-md:text-2xl">How it works</div>
            </div>
            <div className="lg:flex py-24 max-md:py-14">
              
                <div className="flex flex-col items-center lg:w-1/3 pt-6">
                    <PiKeyboard className="text-4xl max-md:text-3xl dark:text-white" />
                    <div className="text-2xl max-md:text-lg pt-4 font-bold  dark:text-white">Enter Course Title</div>
                    <div className="text-lg max-md:text-xs text-center px-3 pt-2 font-medium  dark:text-white"  >Browse or search for university courses by name, department, category, or language.
                    Quickly access syllabus, credit info, and professor details — all in one place</div>
                </div>

         
                <div className="flex flex-col items-center  lg:w-1/3 pt-6">
                    <RiAiGenerate  className="text-4xl max-md:text-3xl dark:text-white" />
                    <div className="text-2xl max-md:text-lg pt-4 font-bold  dark:text-white">Explore Reviews & Ratings</div>
                    <div className="text-lg max-md:text-xs text-center px-3 pt-2 font-medium  dark:text-white" >See real student feedback from those who took the course before you.
                    Check comments about teaching style, difficulty level, and grading fairness.
                </div>
                </div>

               
                <div className="flex flex-col items-center lg:w-1/3 pt-6">
                    <PiVideo   className="text-4xl max-md:text-3xl  dark:text-white" />
                    <div className="text-2xl max-md:text-lg pt-4 font-bold  dark:text-white">AI-Powered Learning Assistant

                    </div>
                    <div className="text-lg max-md:text-xs text-center px-3 pt-2 font-medium  dark:text-white" >AI assistant helps you learn more effectively by generating content based on your course syllabus — 
                    or any topic you wish to explore.                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideThree;
