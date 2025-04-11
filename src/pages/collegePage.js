import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CollegeListsSidebar from '../components/collegeListSidebar';
import Header from '../components/header';
import { Card } from 'flowbite-react';
import Footers from '../components/footers';
import { serverURL } from '../constants';

const CollegePage = () => {
  const { collegeId } = useParams();
  const [college, setCollege] = useState(null);

  useEffect(() => {
    fetch(serverURL +`/api/colleges/${collegeId}/`) // Replace with your backend URL
      .then((res) => res.json())
      .then((data) => setCollege(data))
      .catch((err) => console.error("Error fetching college:", err));
  }, [collegeId]);

  if (!college) return <p>Loading...</p>;

  const style = {
    root: {
      base: "max-w-sm flex rounded-none border border-black bg-white shadow-none dark:border-white dark:bg-black m-4",
      children: "flex h-[150px] w-[400px] flex-col justify-center gap-3 p-5",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row"
      },
      href: "hover:bg-white dark:hover:bg-black"
    }
  };

  
  return (
    <div>
      <Header isHome={true} className="sticky top-0 z-50" />
      <div className="flex flex-row overflow-y-auto  h-screen max-md:hidden no-scrollbar">
        <CollegeListsSidebar />
        <div className="overflow-y-auto no-scrollbar flex-grow flex-col dark:bg-black"> 
          <h1 className="text-3xl font-black mt-14 max-md:text-1xl dark:text-white flex justify-center">{college.name}</h1>
          <div className="mt-16 flex flex-wrap items-center justify-center">
            {college.departments.map((dept) => (
              <Card key={dept._id} theme={style}>
                <h5 className="text-xl font-black tracking-tight text-black dark:text-white">{dept.title}</h5>     
                <Link to={`/college/${collegeId}/${dept.id}`}
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

export default CollegePage;




