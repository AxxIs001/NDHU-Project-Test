import React from 'react';
import Footers from '../components/footers';
import Header from '../components/header';
import CollegeListSidebar from '../components/collegeListSidebar';
import { universityData } from '../data/universityData'; 

const Home = () => {

    
    return (
        <div className='h-screen flex flex-col'>
            <Header isHome={true} className="sticky top-0 z-50" />
            <div className='dark:bg-black flex-1'>
                <div className='pb-10 mx-2'>
                <CollegeListSidebar colleges={universityData} /> 
                </div>
            </div>
            <Footers className="sticky bottom-0 z-50" />
        </div>
    );
};

export default Home;


/*
import React, { useEffect, useState } from 'react';
import Footers from '../components/footers';
import Header from '../components/header';
import CollegeListSidebar from '../components/collegeListSidebar';
import axios from 'axios';
import { serverURL } from '../constants'; // Ensure it contains your backend URL

const Home = () => {
    const [colleges, setColleges] = useState([]); // ✅ Ensure default value is an empty array


    useEffect(() => {
        const fetchColleges = async () => {
            try {
                const response = await axios.get(`${serverURL}/api/colleges`);
                setColleges(response.data);
            } catch (error) {
                console.error("Error fetching colleges:", error);
            }
        };
        fetchColleges();
    }, []);

    return (
        <div className='h-screen flex flex-col'>
            <Header isHome={true} className="sticky top-0 z-50" />
            <div className='dark:bg-black flex-1'>
                <div className='pb-10 mx-2'>
                    <CollegeListSidebar colleges={colleges} />
                </div>
            </div>
            <Footers className="sticky bottom-0 z-50" />
        </div>
    );
};

export default Home;
*/