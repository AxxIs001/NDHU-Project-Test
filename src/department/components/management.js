import React from 'react';
import { Card } from 'flowbite-react';
import Footers from '../components/footers';


const Management = () => {
    
    const departmentNames = [
        {
            id: 1,
            title: 'EXECUTIVE MASTER PROGRAM OF BUSINESS ADMINISTRATION (in-service master program)',
            description: '',
        },
        {
            id: 2,
            title: 'BACHELOR PROGRAM OF MANAGEMENT SCIENCE AND FINANCE (INTERNATIONAL PROGRAM)',
            description: '',
        },
        {
            id: 3,
            title: 'BACHELOR PROGRAM OF ACCOUNTING AND INFORMATION MANAGEMENT(INTERNATIONAL PROGRAM)',
            description: '',
        },
        {
            id: 4,
            title: 'BACHELOR PROGRAM OF DIGITAL MARKETING AND SERVICE INNOVATION',
            description: '',
        },
        {
            id: 5,
            title: 'DEPARTMENT OF BUSINESS ADMINISTRATION',
            description: '',
        },
        {
            id: 6,
            title: 'DEPARTMENT OF INTERNATIONAL BUSINESS',
            description: '',
        },        {
            id: 7,
            title: 'DEPARTMENT OF ACCOUNTING',
            description: '',
        },
        {
            id: 8,
            title: 'DEPARTMENT OF INFORMATION MANAGEMENT',
            description: '',
        },
        {
            id: 9,
            title: 'DEPARTMENT OF FINANCE',
            description: '',
        },
        {
            id: 10,
            title: 'GRADUATE INSTITUTE OF LOGISTICS MANAGEMENT',
            description: '',
        },
        {
            id: 11,
            title: 'DEPARTMENT OF TOURISM, RECREATION AND LEISURE STUDIES',
            description: '',
        },
    ];

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
            <div className='flex flex-row'>
            <div className='dark:bg-black flex-1'>
                <div className='flex-1 flex flex-col items-center justify-center'>
                    <h1 className="text-3xl font-black mt-14 max-md:text-1xl dark:text-white">COLLEGE OF MANAGEMENT</h1>
                    <div className='mt-16 flex flex-wrap items-center justify-center'>
                        {departmentNames.map((card) => (
                            <Card key={card.id} theme={style}>
                                <h5 className='text-xl font-black tracking-tight text-black dark:text-white'>
                                    {card.title}
                                </h5>
                                <p className='font-normal text-sm text-black dark:text-white'><span className='text-blue-700 font-semibold cursor-pointer'>Click to open</span></p>
                            </Card>
                        ))}
                    </div>
                </div>
                   
            </div>                
            </div>
            <Footers className="sticky bottom-0 z-50" />
        </div>
    );
};

export default Management;