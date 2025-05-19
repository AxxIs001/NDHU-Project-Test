import React from 'react';
import slide from '../../res/img/slideTwo.png'

const SlideTwo = () => {
    return (
        <div className="px-7 justify-center items-center pb-10 dark:bg-black">
            <div className="flex flex-col md:flex-row items-center">

                <div className="md:w-1/2 h-full p-4 flex flex-col items-center md:items-start justify-center">

                    <h2 className="text-4xl font-black mb-2 max-md:text-center max-md:text-2xl dark:text-white" >Our Purpose</h2>


                    <p className="text-black mb-2 mt-2 max-md:text-center font-medium max-md:text-xs dark:text-white">
                    Many students — especially those without senior guidance — end up selecting difficult or unsuitable courses that affect their GPA or learning outcomes. 
                    Our platform bridges that gap by giving every student access to honest feedback and relevant data before enrolling.
                    </p>  
                </div>
                <div className="md:w-1/2 h-full">
                    <img
                        src={slide}
                        alt="Your Alt Text"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default SlideTwo;
