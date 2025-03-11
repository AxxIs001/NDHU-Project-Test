import { useParams } from 'react-router-dom';
import { universityData } from '../data/universityData';
import CollegeListsSidebar from '../components/collegeListSidebar';
import Header from '../components/header';
import { Card } from 'flowbite-react';
import Footers from '../components/footers';

const CollegePage = () => {
  const { collegeId } = useParams();
  const college = universityData.find((c) => c.id === parseInt(collegeId));

  if (!college) return <p>College not found</p>;

  const style = {
    "root": {
        "base": "max-w-sm flex rounded-none border border-black bg-white shadow-none dark:border-white dark:bg-black m-4",
        "children": "flex h-[150px] w-[400px] flex-col justify-center gap-3 p-5",
        "horizontal": {
            "off": "flex-col",
            "on": "flex-col md:max-w-xl md:flex-row"
        },
        "href": "hover:bg-white dark:hover:bg-black"
    }
}


  return (
    <div>
      <Header isHome={true} className="sticky top-0 z-50" />
      <div className="flex flex-row overflow-y-auto h-screen max-md:hidden no-scrollbar">
        <CollegeListsSidebar />
        <div className="overflow-y-auto flex-grow flex-col dark:bg-black"> 
          <h1 className="text-3xl font-black mt-14 max-md:text-1xl dark:text-white flex justify-center">{college.name}</h1>
          <div className="mt-16 flex flex-wrap items-center justify-center">
            {college.departments.map((dept) => (
              <Card key={dept.id}  theme={style}>
                <h5 className="text-xl font-black tracking-tight text-black dark:text-white">{dept.title}</h5>
                <p className="font-normal text-sm text-black dark:text-white">
                  <span className="text-blue-700 font-semibold cursor-pointer">Click to open</span>
                </p>
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
