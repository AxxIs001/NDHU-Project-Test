import React from 'react';
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
 
