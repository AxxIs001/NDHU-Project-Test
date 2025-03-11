import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import { universityData } from '../data/universityData';

const CollegeListsSidebar = () => {
  const navigate = useNavigate();

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
        <Sidebar.Items className='mt-8 dark:text-white'>
        {universityData.map((college) => (
          <div
            key={college.id}
            className="flex flex-row items-center mt-6 cursor-pointer"
            onClick={() => navigate(`/college/${college.id}`)}
          >
            <p className="font-bold text-base ml-2">{college.name}</p>
          </div>
        ))}
      </Sidebar.Items>
    </Sidebar>
  );
};

export default CollegeListsSidebar;

    

