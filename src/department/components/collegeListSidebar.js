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
        function redirectCsiePage() {
            navigate("/csiePage");
        }
        function redirectManagementPage() {
            navigate("/managementPage");
        }
        function redirectChssPage() {
            navigate("/chssPage");
        }
        function redirectIndigenousPage() {
            navigate("/indigenousPage");
        }
        function redirectArt() {
            navigate("/artPage");
        }
        function redirectHuahShih() {
            navigate("/huahShihPage");
        }
        function redirecTeacherEducation() {
            navigate("/teacherEducationPage");
        }
        function redirectEnvironmental() {
            navigate("/enviromentalPage");
        }
    

    
    return (
        <Sidebar theme={style} aria-label="Default sidebar example ">
        <Sidebar.Items className='mt-8 dark:text-white'>
            <div className='flex flex-row items-center ' onClick={redirectDashBoard}>
                <p className='font-bold text-base ml-2 '>DashBoard</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectCsiePage}>
                <p className='font-bold text-base ml-2'>COLLEGE OF SCIENCE AND ENGINEERING</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectManagementPage}>
                <p className='font-bold text-base ml-2'>COLLEGE OF MANAGEMENT</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectChssPage}>
                <p className='font-bold text-base ml-2'>COLLEGE OF HUMANITIES AND SOCIAL SCIENCES</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectIndigenousPage}>
                <p className='font-bold text-base ml-2'>COLLEGE OF INDIGENOUS STUDIES</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectArt}>
                <p className='font-bold text-base ml-2'>COLLEGE OF THE ARTS</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectHuahShih}>
                <p className='font-bold text-base ml-2'>HUA-SHIH COLLEGE OF EDUCATION</p>
            </div>
            <div className='flex flex-row items-center mt-6'  onClick={redirecTeacherEducation}>
                <p className='font-bold text-base ml-2'>CENTER FOR TEACHER EDUCATION</p>
            </div>
            <div className='flex flex-row items-center mt-6' onClick={redirectEnvironmental}>
                <p className='font-bold text-base ml-2'>COLLEGE OF ENVIRONMENTAL STUDIES AND OCEANOGRAPHY</p>
            </div>
        </Sidebar.Items>
    </Sidebar>
    );
};

export default CollegeListsSidebar;