import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import { universityColleges } from '../data/universityColleges';

const CollegeListsSidebar = ({ className = '' }) => {
  const style = {
    root: {
      base: "h-full",
      collapsed: {
        on: "w-16",
        off: "w-64 max-w-64 min-w-64"
      },
      inner:
        "no-scrollbar h-full overflow-y-auto overflow-x-hidden rounded-none border-black dark:border-white md:border-r bg-white py-4 px-3 dark:bg-black"
    }
  };

  return (
    <div className={`sticky top-0 h-screen w-64 ${className}`}>
      <Sidebar theme={style} aria-label="Sidebar">
        <Sidebar.Items className="dark:text-white">
          {universityColleges.map((college) => (
            <Link
              key={college.id}
              to={`/college/${college.id}`}
              className="flex flex-row items-center mt-6 cursor-pointer"
            >
              <p className="font-bold text-base ml-2">{college.name}</p>
            </Link>
          ))}
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default CollegeListsSidebar;


/*import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import { universityColleges } from '../data/universityColleges';

const CollegeListsSidebar = () => {
  const style = {
    "root": {
        "base": "h-full",
        "collapsed": {
            "on": "w-16",
            "off": "w-64 max-w-64 min-w-64"
        },
        "inner": "no-scrollbar h-full overflow-y-auto overflow-x-hidden rounded-none border-black dark:border-white md:border-r  bg-white py-4 px-3 dark:bg-black"
    }
}

  return (
    <Sidebar theme={style} aria-label="Default sidebar example ">
        <Sidebar.Items className=' dark:text-white'>
        {universityColleges.map((college) => (
          <Link
            key={college.id}
            to={`/college/${college.id}`}
            className="flex flex-row items-center mt-6 cursor-pointer"
          >
            <p className="font-bold text-base ml-2">{college.name}</p>
          </Link>
        ))}
      </Sidebar.Items>
    </Sidebar>
  );
};

export default CollegeListsSidebar;*/