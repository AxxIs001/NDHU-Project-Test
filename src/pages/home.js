import React from 'react';
import Footers from '../components/footers';
import Header from '../components/header';
import CollegeListSidebar from '../components/collegeListSidebar';
import UserCourses from '../components/usercourses';


const Home = () => {
 
    return (
        <div className='h-screen flex flex-col'>
            <Header isHome={true} className="sticky top-0 z-50" />
            <div className='dark:bg-black flex-1'>
                <div className='pb-10 mx-2 flex'>
                <CollegeListSidebar  /> 
              
                </div>  
            </div>
            <Footers className="sticky bottom-0 z-50" />
        </div>
    );
};

export default Home;
 
//<UserCourses userId={sessionStorage.getItem('uid')} />
/*import React from 'react';
import Footers from '../components/footers';
import Header from '../components/header';
import CollegeListSidebar from '../components/collegeListSidebar';
import { universityColleges } from '../data/universityColleges';
import { Card } from 'flowbite-react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { serverURL } from '../constants';



const Home = () => {
    const { collegeId } = useParams();
    const [college, setCollege] = useState(null);
    
    useEffect(() => {
      fetch(serverURL + `/api/colleges/${collegeId}`) 
        .then((res) => res.json())
        .then((collegeData) => setCollege(collegeData))
        .catch((err) => console.error('Error fetching data:', err));
    }, [collegeId]);
    
    if (!college) return <p>Loading...</p>;

    const style = {
        root: {
          base: "max-w-sm flex  rounded-none border border-black bg-white shadow-none dark:border-white dark:bg-black m-4",
          children: "flex h-[150px] w-[400px] flex-col justify-center gap-3 p-5",
          horizontal: {
            off: "flex-col",
            on: "flex-col md:max-w-xl md:flex-row"
          },
          href: "hover:bg-white dark:hover:bg-black"
        }
      };

    return (
        <div className='h-screen flex flex-col'>
            <Header isHome={true} className="sticky top-0 z-50" />
            <div className='dark:bg-black flex-1'>
                <div className='pb-10 mx-2 flex'>
                 <div className="mt-16 flex flex-wrap items-center justify-center">
                         {universityColleges.map((college) => (
                                 <Card key={college.id} theme={style}>
                                 <h5 className="text-lg font-black tracking-tight text-black dark:text-white">
                                   {college.name}
                                 </h5>
                                 <Link  key={college.id} 
                                  to={`/college/${college.id}`}
                                 className="text-sm text-blue-700 font-semibold cursor-pointer">
                                    Click to open
                                 </Link>
                                </Card>
                              ))}
                          </div>
              
                </div>  
            </div>
            <Footers className="sticky bottom-0 z-50" />
        </div>
    );
};

export default Home; */