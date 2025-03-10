import { Navbar } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Environmental from './components/enviromental';
import CollegeListsSidebar from './components/collegeListSidebar';
import CollegeMobileLists from './components/collegeListSidebarMobile';
import Header from '../components/header';

const EnvironmentalPage = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        sessionStorage.setItem('darkMode', false);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div>
            <Header isHome={true} className="sticky top-0 z-50" />
                <div className="flex bg-white dark:bg-black md:hidden pb-10 overflow-y-auto">    
                    <div className={`fixed inset-0 bg-black opacity-50 z-50 ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <div>
                            <Navbar fluid className='py-3 dark:bg-black bg-white border-black dark:text-white dark:border-white md:border-b'>
                                <Navbar.Brand className='ml-1'>
                                    <p className='font-black text-xl'>Admin Panel</p>
                                </Navbar.Brand>
                                <div className='flex md:hidden justify-center items-center'>

                                    {isSidebarOpen ? (
                                        <FiX
                                            onClick={toggleSidebar}
                                            className='mx-2'
                                            size={20}
                                            color={sessionStorage.getItem('darkMode') === 'true' ? 'white' : 'black'}
                                        />
                                    ) : (
                                        <FiMenu
                                            onClick={toggleSidebar}
                                            className='mx-2'
                                            size={20}
                                            color={sessionStorage.getItem('darkMode') === 'true' ? 'white' : 'black'}
                                        />
                                    )}
                                </div>
                            </Navbar>
                            <Environmental />
                        </div>
                        <CollegeMobileLists isSidebarOpen={isSidebarOpen} />
                    </div>
                </div>
                <div className='flex flex-row overflow-y-auto h-screen max-md:hidden no-scrollbar '>
                    <CollegeListsSidebar />
                    <div className='overflow-y-auto flex-grow flex-col dark:bg-black'>
                        <Environmental />
                    </div>
                </div>
            </div>
        </>
    );
};
export default EnvironmentalPage;