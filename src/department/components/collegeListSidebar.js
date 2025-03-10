import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';

const CollegeListsSidebar = () => {

    
        const style = {
            "root": {
                "base": "h-full",
                "collapsed": {
                    "on": "w-16",
                    "off": "w-64 max-w-64 min-w-64"
                },
                "inner": "no-scrollbar h-full overflow-y-auto overflow-x-hidden rounded-none border-black dark:border-white md:border-r  bg-white py-4 px-3 dark:bg-black"
            }
        }
    
        const navigate = useNavigate();
        function redirectDashBoard() {
            navigate("/dashBoard");
        }
        function redirectUsers() {
            navigate("/csieList");
        }
        function redirectCourses() {
            navigate("/management");
        }
        function redirectPaid() {
            navigate("/");
        }
        function redirectContacts() {
            navigate("/");
        }
        function redirectAdmins() {
            navigate("/");
        }
        function redirectTerms() {
            navigate("/");
        }
        function redirectRefund() {
            navigate("/");
        }
        function redirectPrivacy() {
            navigate("/");
        }
        function redirectCancel() {
            navigate("/");
        }
    

    
    return (
        <Sidebar theme={style} aria-label="Default sidebar example">
        <Sidebar.Items className='mt-8'>
            <div className='flex flex-row items-center' onClick={redirectDashBoard}>
                <p className='font-bold text-base ml-2 '>DashBoard</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectUsers}>
                <p className='font-bold text-base ml-2'>COLLEGE OF SCIENCE AND ENGINEERING</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectCourses}>
                <p className='font-bold text-base ml-2'>COLLEGE OF MANAGEMENT</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectPaid}>
                <p className='font-bold text-base ml-2'>COLLEGE OF HUMANITIES AND SOCIAL SCIENCES</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectAdmins}>
                <p className='font-bold text-base ml-2'>COLLEGE OF INDIGENOUS STUDIES</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectContacts}>
                <p className='font-bold text-base ml-2'>COLLEGE OF THE ARTS</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectTerms}>
                <p className='font-bold text-base ml-2'>HUA-SHIH COLLEGE OF EDUCATION</p>
            </div>
            <div className='flex flex-row items-center mt-6'  onClick={redirectPrivacy}>
                <p className='font-bold text-base ml-2'>CENTER FOR TEACHER EDUCATION</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectCancel}>
                <p className='font-bold text-base ml-2'>COLLEGE OF ENVIRONMENTAL STUDIES AND OCEANOGRAPHY</p>
            </div>
            <div className='flex flex-row items-center mt-6'  onClick={redirectRefund}>
                <p className='font-bold text-base ml-2'>COLLEGE OF HUILAN </p>
            </div>
        </Sidebar.Items>
    </Sidebar>
    );
};

export default CollegeListsSidebar;