import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CollegeListsSidebar from '../components/collegeListSidebar';
import Header from '../components/header';
import { Card } from 'flowbite-react';
import Footers from '../components/footers';

const DepartmentPage = () => {
  const { collegeId, departmentId } = useParams();
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/colleges/${collegeId}`) 
      .then((res) => res.json())
      .then((collegeData) => {
        const foundDepartment = collegeData.departments.find(
          (dept) => dept.id === departmentId
        );
        setDepartment(foundDepartment);
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, [collegeId, departmentId]);

  if (!department ) return <p>Loading...</p>;

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
    <div>
      <Header isHome={true} className="sticky top-0 z-50" />
      <div className="flex flex-row overflow-y-auto h-screen max-md:hidden no-scrollbar">
        <CollegeListsSidebar />
        <div className="overflow-y-auto  flex-grow flex-col dark:bg-black">
          <h1 className="text-3xl font-black mt-14 max-md:text-1xl dark:text-white flex justify-center">
            {department.title}
          </h1>
          <div className="mt-16 flex flex-wrap items-center justify-center">
            { department.programs.map((program) => (
                <Card key={program.id} theme={style}>
                  <h5 className="text-lg font-black tracking-tight text-black dark:text-white">
                    {program.name}
                  </h5>
                  <Link   to={`/college/${collegeId}/${departmentId}/${program.id}`}
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

export default DepartmentPage;