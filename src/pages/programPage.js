import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CollegeListsSidebar from '../components/collegeListSidebar';
import Header from '../components/header';
import { Card } from 'flowbite-react';
import Footers from '../components/footers';

const ProgramPage = () => {
  const { collegeId, departmentId, programId } = useParams();
  const [department, setDepartment] = useState(null);
  const [program, setProgram] = useState(null);
  const [college, setCollege] = useState(null);

 useEffect(() => {
  fetch(`http://localhost:5000/api/colleges/${collegeId}`)
    .then((res) => res.json())
    .then((collegeData) => {
      setCollege(collegeData);
      const departmentData = collegeData.departments.find(
        (dept) => dept.id === departmentId
      );
      setDepartment(departmentData);
      if (departmentData && departmentData.programs) {
        const foundProgram = departmentData.programs.find(
          (prog) => {
              return prog.id === programId;
          }
      );
        setProgram(foundProgram);
      } else {
        setProgram(null);
      }
    })
    .catch((err) => console.error('Error fetching data:', err));
}, [collegeId, departmentId, programId]);

  if (!department || !college || !program) return <p>Loading Program Page...</p>;

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
            {program.courses &&
              program.courses.map((course) => (
                <Card key={course.id} theme={style}>
                  <h5 className="text-xl font-black tracking-tight text-black dark:text-white">
                    {course.cName}
                  </h5>
                  <p className="text-sm text-blue-700 font-semibold cursor-pointer">
                    Click to open
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

export default ProgramPage;