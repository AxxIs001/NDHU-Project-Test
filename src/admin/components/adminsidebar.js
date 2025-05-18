import React from 'react';
import LogoComponent from '../../components/LogoComponent';
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { MdSettingsInputComponent } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { Sidebar } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = () => {

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
        navigate("/users");
    }
    function redirectCourses() {
        navigate("/courses");
    }
    function redirectContacts() {
        navigate("/contacts");
    }
    function redirectAdmins() {
        navigate("/admins");
    }


    return (
        <Sidebar
            theme={style}
            aria-label="Default sidebar example">
            <LogoComponent isDarkMode={false} />
            <Sidebar.Items className='mt-8'>
                <div className='flex flex-row items-center' onClick={redirectDashBoard}>
                    <MdSpaceDashboard size={18} />
                    <p className='font-bold text-base ml-2 '>DashBoard</p>
                </div>
                <div className='flex flex-row items-center mt-6' onClick={redirectUsers}>
                    <FaUsers size={18} />
                    <p className='font-bold text-base ml-2'>Users</p>
                </div>
                <div className='flex flex-row items-center mt-6' onClick={redirectCourses}>
                    <PiVideoFill size={18} />
                    <p className='font-bold text-base ml-2'>Courses</p>
                </div>
                <div className='flex flex-row items-center mt-6' onClick={redirectAdmins}>
                    <MdSettingsInputComponent size={18} />
                    <p className='font-bold text-base ml-2'>Admins</p>
                </div>
                <div className='flex flex-row items-center mt-6' onClick={redirectContacts}>
                    <AiFillMessage size={18} />
                    <p className='font-bold text-base ml-2'>Contacts</p>
                </div>
            </Sidebar.Items>
        </Sidebar>
    );
};

export default AdminSidebar;
