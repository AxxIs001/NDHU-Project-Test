import React from 'react';
import Footers from '../components/footers';
import Header from '../components/header';
import DepartmentLists from '../department/components/collegeListSidebar';

const Home = () => {

    return (
        <div className='h-screen flex flex-col'>
            <Header isHome={true} className="sticky top-0 z-50" />
            <div className='dark:bg-black flex-1'>
                <div className='pb-10 mx-2'>
                  <DepartmentLists />
                </div>
            </div>
            <Footers className="sticky bottom-0 z-50" />
        </div>
    );
};

export default Home;