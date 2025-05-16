import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CollegeListsSidebar from '../components/collegeListSidebar';
import Header from '../components/header';
import { Card, TextInput } from 'flowbite-react';
import Footers from '../components/footers';
import { serverURL } from '../constants';

const ProgramPage = () => {
  const { collegeId, departmentId, programId } = useParams();
  const [program, setProgram] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(1);

  useEffect(() => {
    fetch(serverURL + `/api/colleges/${collegeId}`)
      .then((res) => res.json())
      .then((collegeData) => {
        const departmentData = collegeData.departments.find(
          (dept) => dept.id === departmentId
        );
        const foundProgram = departmentData.programs.find(
          (prog) => prog.id === programId
        );

        // Deduplicate courses by courseNo
        const dedupedCourses = Array.from(
          new Map(foundProgram.courses.map(course => [course.courseNo, course])).values()
        );

        setProgram({ ...foundProgram, courses: dedupedCourses });
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, [collegeId, departmentId, programId]);

  useEffect(() => {
    if (program) {
      const filtered = program.courses.filter((course) =>
        (course.cName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.courseNo.toLowerCase().includes(searchTerm.toLowerCase())) &&
        course.semester === selectedSemester
      );
      setFilteredCourses(filtered);
    }
  }, [program, searchTerm, selectedSemester]);

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
        <div className="overflow-y-auto no-scrollbar flex-grow flex-col dark:bg-black">
          <h1 className="text-2xl font-black mt-14 max-md:text-1xl dark:text-white flex items-center justify-center">
            {program.name}
          </h1>
          <div className="relative mt-8 flex justify-center">
            <Link
              to={`/college/${collegeId}/${departmentId}`}
              className="absolute left-6 bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-md"
            >
              ← Back
            </Link>
            <TextInput
              id="search"
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[400px]"
              style={{ paddingLeft: '20px', borderColor: 'black' }}
            />
            <div className="flex items-center justify-center mt-2 gap-4 absolute right-6">
              <span className="text-sm font-medium text-gray-700 dark:text-white">Semester 1</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={selectedSemester === 2}
                  onChange={() =>
                    setSelectedSemester((prev) => (prev === 1 ? 2 : 1))
                  }
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
              </label>
              <span className="text-sm font-medium text-gray-700 dark:text-white">Semester 2</span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center">
            {filteredCourses.map((course) => (
              <Card key={course.id} theme={style}>
                <h5 className="text-xl font-black tracking-tight text-black dark:text-white">
                  {course.cName}
                </h5>
                <h5 className="text-xl font-black tracking-tight text-black dark:text-white">
                  No: {course.courseNo}
                </h5>
                <Link
                  to={`/college/${collegeId}/${departmentId}/${program.id}/${course.id}`}
                  className="text-sm text-blue-700 font-semibold cursor-pointer"
                >
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
