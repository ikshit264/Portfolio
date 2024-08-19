import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import ME from '@/../public/ME.jpg';
import internet_Explorer from '@/../public/Internet_Explorer.png';
import Email_Icon from '@/../public/Email_Icon.png';
import Help_and_Support from '@/../public/Help_and_Support.png';
import Logout from '@/../public/Logout.png';
import Power_Off from '@/../public/Power.png';
import { ChildComponentProps } from '@/Types/Interfaces';
import ShutdownEffect from './ShutDownEffect';
import LetsConnect from "@/Pages/LetsConnect";
import MyComputer from '@/Pages/MyComputer';
import CMD from '@/Components/TabTypes/CMD';
import Experience from '@/Pages/Experience';
import Projects from '@/Pages/Projects';
import SkillSet from '@/Pages/SkillSet';
import InfoTabs from "@/Pages/InfoTabs";
import AboutMe from "@/Pages/AboutMe";
import ClosedFolder from '@/../public/Folder_Closed.png';
import CMD_img from "@/../public/Command_Prompt.png";
import { useStateManagement } from '@/recoil/useStateManagement';
import { ErrorData, StartMenuProps } from '@/Data/All-Error-Data';
import { useStateErrorManagement } from '@/recoil/useStateErrorManagement';


const StartOptions: StartMenuProps[] = [
    {
        title: "Connect",
        IconClose: internet_Explorer,
        Component: LetsConnect,
        description: 'Message ME',
        Tab: "SimpleTab", // All use SimpleTab
    },
    {
        title: "Computer",
        IconClose: Email_Icon,
        Component: MyComputer,
        description: 'This is my computer',
        Tab: "SimpleTab", // All use SimpleTab
    },
    {
        title: 'none',
        Tab: 'ErrorTab',
    },
    {
        title: "Skill Set",
        IconClose: ClosedFolder,
        Component: SkillSet,
        Tab: "SimpleTab", // All use SimpleTab
    },
    {
        title: "Help",
        IconClose: Help_and_Support,
        IconOpen: Help_and_Support,
        Component: InfoTabs,
        Tab: "SimpleTab", // All use SimpleTab
    },
    {
        title: "CMD",
        IconClose: CMD_img,
        Component: CMD,
        Tab: "CMD", // All use SimpleTab
    },
    {
        title: "Experience",
        IconClose: ClosedFolder,
        Component: Experience,
        Tab: "SimpleTab", // All use SimpleTab
    },
    {
        title: "Projects",
        IconClose: ClosedFolder,
        Component: Projects,
        Tab: "SimpleTab", // All use SimpleTab
    },
    {
        title: "About Me",
        IconClose: ClosedFolder,
        Component: AboutMe,
        Tab: "SimpleTab", // All use SimpleTab
    },
];

const StartComponents: React.FC<ChildComponentProps> = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [hoveredAllPrograms, sethoveredAllPrograms] = useState<boolean>(false);
    const [showShutdownEffect, setShowShutdownEffect] = useState(false);
    const { Open, Min, Max, makeFalse, makeTrue } = useStateManagement();
    const { OpenError, MinError, MaxError, makeErrorFalse, makeErrorTrue } = useStateErrorManagement();

    const handleMouseEnter = (title: string) => {
        setHoveredItem(title);
        console.log(hoveredItem)
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const handleClick = (index: number) => {
        makeTrue(index, 'open');
    };

    const handleErrorClick = (index: number) => {
        makeErrorTrue(index, 'Open');
    }

    const handleShutdownClick = () => {
        setShowShutdownEffect(true);
    };

    return (
        <div className='border rounded-t-lg border-black shadow-2xl'>

            <div className='flex flex-col m-0 items-start bg-gradient-to-b to-[#428EE9] bg-[#92bbf2] from-[#3a73bd] rounded-t-md'>
                <div className="header flex gap-3 p-1 items-center">
                    <div className='rounded'>
                        <Image src={ME} alt={'ME'} width={40} className='rounded border' />
                    </div>
                    <div className="text-lg font-medium text-center text-white">User</div>
                </div>
            </div>
            <div className='w-full h-[2px] bg-gradient-to-r from-[#CBE3FF] via-[#DA884B] to-[#CBE3FF]' />

            <div className="mid flex bg-slate-50 border-blue-500">
                <div className='flex flex-col justify-between gap-3 p-2 basis-1/2'>
                    <div className='w-full'>
                        {StartOptions.map((item, index) => (
                            <div key={index} className='p-0.5'>
                                {item.title !== 'none' ? (
                                    <div className='cursor-pointer'>
                                        <div className='flex p-1 gap-1 items-center hover:bg-[#2F71CD] hover:text-white' onClick={() => handleClick(index)}>
                                            <div>
                                                <Image src={item.IconClose} alt={item.title} width={27} />
                                            </div>
                                            <div className='flex flex-col'>
                                                <div className='text-sm'>{item.title}</div>
                                                <div className='text-[#888787] text-xs'>{item.description}</div>
                                            </div>
                                        </div>
                                        <div>
                                            {item.list?.map((items, idx) => (
                                                <div key={idx} className='py-1'>
                                                    {items.title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className='w-full h-[2px] bg-gradient-to-r from-[#CBE3FF] via-[#979797] to-[#CBE3FF]' />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='w-full h-[2px] bg-gradient-to-r from-[#CBE3FF] via-[#979797] to-[#CBE3FF]' />
                        <div className='cursor-pointer  m-1 font-semibold w-full text-center hover:bg-[#2F71CD]' onMouseEnter={() => { sethoveredAllPrograms(true) }}
                            onMouseLeave={() => sethoveredAllPrograms(false)}>
                            <span className='text-base '
                            >
                                All Programs
                            </span>
                            {
                                hoveredAllPrograms && (
                                    <div className='absolute bottom-12 left-32 w-fit z-20 bg-white hover:bg-[#2F71CD] border-l-blue-500 border-l-[4px] shadow-lg'>
                                        hi
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 bg-[#CBE3FF] p-2 border-l border-black w-[250px]'>
                    {ErrorData.map((item, index) => (
                        <div key={index}
                            onClick={() => { handleErrorClick(index) }}
                            className='relative cursor-pointer'
                            onMouseEnter={() => { if (item.list) handleMouseEnter(item.title) }}
                            onMouseLeave={handleMouseLeave}>
                            <div className={`flex gap-1 items-center justify-between text-xs font-semibold hover:bg-[#2F71CD] hover:text-white`}>
                                {item.title !== 'none' ? (
                                    <div className='flex gap-1 items-center text-xs'>
                                        <div>
                                            <Image src={item.IconClose} alt={item.title} width={22} height={22} />
                                        </div>
                                        <div className='flex flex-col'>
                                            <div>{item.title}</div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='w-full h-[2px] bg-gradient-to-r from-[#CBE3FF] via-[#979797] to-[#CBE3FF]' />
                                )}
                                {item.list && (
                                    <div className='pr-4'> {'>'} </div>
                                )}
                            </div>
                            {/* List rendering on hover */}
                            {
                                hoveredItem === item.title &&
                                (
                                    <div className='absolute left-full bottom-[10%] w-fit z-20 bg-white border-l-blue-500 border-l-[4px] shadow-lg'>
                                        {item.list?.map((items, idx) => (
                                            <div key={idx} className='p-1 gap-1 bg-white text-[10px] hover:bg-[#3a89ff] pr-4 whitespace-nowrap flex items-center'>
                                                {items.IconClose && <Image src={items.IconClose} alt={items.title} width={15} />}
                                                {items.title}
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative border rounded-t-lg border-black shadow-2xl'>
                {showShutdownEffect && <ShutdownEffect />}

                <div className="footer flex justify-end gap-2 py-0.5 px-1 text-white bg-gradient-to-t to-[#428EE9] bg-[#0E60CB] from-[#0E60CB]">
                    <div className='flex items-center gap-1 rounded hover:brightness-110 hover:bg-[#3a89ff] cursor-pointer p-1'>
                        <Image src={Logout} alt='Logout' width={23} />
                        <div className='text-xs'>Log Off</div>
                    </div>
                    <div
                        className='flex items-center gap-1 rounded hover:brightness-110 hover:bg-[#3a89ff] cursor-pointer p-1'
                        onClick={handleShutdownClick}>
                        <Image src={Power_Off} alt='Power Off' width={23} />
                        <div className='text-xs'>Turn Off Computer</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartComponents;
