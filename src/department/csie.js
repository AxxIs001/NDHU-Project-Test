import React from 'react';
import { Card } from 'flowbite-react';
import Footers from '../components/footers';


const Csie = () => {
    
    const departmentNames = [
        {
            id: 1,
            title: 'BACHELOR DEGREE PROGRAM OF DATA SCIENCE',
            description: '',
        },
        {
            id: 2,
            title: 'DEPARTMENT OF APPLIED MATHEMATICS',
            description: '',
        },
        {
            id: 3,
            title: 'DEPARTMENT OF CHEMISTRY',
            description: '',
        },
        {
            id: 4,
            title: 'DEPARTMENT OF PHYSICS',
            description: '',
        },
        {
            id: 5,
            title: 'DEPARTMENT OF COMPUTER SCIENCE AND INFORMATION ENGINEERING',
            description: '',
        },
        {
            id: 6,
            title: 'DEPARTMENT OF MATERIALS SCIENCE AND ENGINEERING',
            description: '',
        },        {
            id: 7,
            title: 'DEPARTMENT OF ELECTRICAL ENGINEERING',
            description: '',
        },
        {
            id: 8,
            title: 'DEPARTMENT OF OPTO-ELECTRONIC ENGINEERING',
            description: '',
        },
        {
            id: 9,
            title: 'DEPARTMENT OF BIOCHEMISTRY AND MOLECULAR MEDICINE',
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
                    <h1 className="text-3xl font-black mt-14 max-md:text-1xl dark:text-white">COLLEGE OF SCIENCE AND ENGINEERING</h1>
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

export default Csie;