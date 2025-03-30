import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CollegeListsSidebar from '../components/collegeListSidebar';
import Header from '../components/header';
import { Card } from 'flowbite-react';
import Footers from '../components/footers';
import { serverURL } from '../constants';

const ProgramPage = () => {
  const { collegeId, departmentId, programId } = useParams();
  const [program, setProgram] = useState(null);

 useEffect(() => {
  fetch(serverURL +`/api/colleges/${collegeId}`)
    .then((res) => res.json())
    .then((collegeData) => {
      const departmentData = collegeData.departments.find(
        (dept) => dept.id === departmentId
      );
        const foundProgram = departmentData.programs.find(
          (prog) => {
              return prog.id === programId;
          }
      );
        setProgram(foundProgram);
    })
    .catch((err) => console.error('Error fetching data:', err));
}, [collegeId, departmentId, programId]);

  if (!program) return <p>Loading Program Page...</p>;

  const style = {
    root: {
      base:
        'max-w-sm flex rounded-none border border-black bg-white shadow-none dark:border-white dark:bg-black m-4',
      children: 'flex h-[150px] w-[400px] flex-col justify-center gap-3 p-5',
      horizontal: {
        off: 'flex-col',
        on: 'flex-col md:max-w-xl md:flex-row',
      },
      href: 'hover:bg-white dark:hover:bg-black',
    },
  };

  return (
    <div>
      <Header isHome={true} className="sticky top-0 z-50" />
      <div className="flex flex-row overflow-y-auto h-screen max-md:hidden no-scrollbar">
        <CollegeListsSidebar />
        <div className="overflow-y-auto flex-grow flex-col dark:bg-black">
          <h1 className="text-2xl font-black mt-14 max-md:text-1xl dark:text-white flex items-center justify-center">
            {program.name}
          </h1>
          <div className="mt-16 flex flex-wrap items-center justify-center">
            {program.courses.map((course) => (
                <Card key={course.id} theme={style}>
                  <h5 className="text-xl font-black tracking-tight text-black dark:text-white">
                    {course.cName}
                  </h5>
                  <h5 className="text-xl font-black tracking-tight text-black dark:text-white">
                    No: {course.courseNo}
                  </h5>
                  <Link  to={`/college/${collegeId}/${departmentId}/${program.id}/${course.id}`}
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

export default ProgramPage;