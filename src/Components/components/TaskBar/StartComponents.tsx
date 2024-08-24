import React, { useState } from 'react';
import Image from 'next/image';
import ME from '@/../public/ME.jpg';
import Logout from '@/../public/Logout.png';
import Power_Off from '@/../public/Power.png';
import { ChildComponentProps } from '@/Types/Interfaces';
import ShutdownEffect from './ShutDownEffect';
import { useStateManagement } from '@/recoil/useStateManagement';
import { ErrorData } from '@/Data/All-Error-Data';
import { useStateErrorManagement } from '@/recoil/useStateErrorManagement';
import { AllFolders } from '@/Data/All-Data';

const StartComponents: React.FC<ChildComponentProps> = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [hoveredAllPrograms, setHoveredAllPrograms] = useState<boolean>(false);
    const [showShutdownEffect, setShowShutdownEffect] = useState(false);
    const { makeTrue } = useStateManagement();
    const { makeErrorTrue } = useStateErrorManagement();

    const handleMouseEnter = (title: string) => {
        setHoveredItem(title);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const handleShutdownClick = () => {
        setShowShutdownEffect(true);
    };

    return (
        <div className="border rounded-t-lg border-black shadow-2xl">
            <div className="flex flex-col items-start bg-gradient-to-b to-[#428EE9] bg-[#92bbf2] from-[#3a73bd] rounded-t-md">
                <div className="header flex gap-3 p-1 items-center">
                    <Image src={ME} alt="ME" width={40} className="rounded border" />
                    <div className="text-lg font-medium text-center text-white">User</div>
                </div>
            </div>

            <div className="w-full h-[2px] bg-gradient-to-r from-[#CBE3FF] via-[#DA884B] to-[#CBE3FF]" />
            <div className="mid flex bg-slate-50 border-blue-500">
                <div className="flex flex-col justify-between gap-3 p-2 basis-1/2">
                    <div>
                        {AllFolders.map((item, index) => (
                            <div key={index} className="p-0.5">
                                {item.title !== 'none' ? (
                                    <div className="cursor-pointer">
                                        <div className="flex p-1 gap-1 items-center hover:bg-[#2F71CD] hover:text-white" onClick={() => makeTrue(index, 'open')}>
                                            <Image src={item.IconClose} alt={item.title} width={27} />
                                            <div className="flex flex-col">
                                                <div className="text-sm flex whitespace-nowrap ">{item.title}</div>
                                                <div className="text-[#888787] text-xs">{item.description}</div>
                                            </div>
                                        </div>
                                        {item.list && (
                                            <div>
                                                {item.list.map((subItem, subIndex) => (
                                                    <div key={subIndex} className="py-1">
                                                        {subItem.title}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="w-full h-[2px] bg-gradient-to-r from-[#CBE3FF] via-[#979797] to-[#CBE3FF]" />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full h-[2px] bg-gradient-to-r from-[#CBE3FF] via-[#979797] to-[#CBE3FF]" />
                        <div
                            className="relative cursor-pointer m-1 font-semibold w-full text-center hover:bg-[#2F71CD]"
                            onMouseEnter={() => setHoveredAllPrograms(true)}
                            onMouseLeave={() => setHoveredAllPrograms(false)}
                        >
                            <span className="text-base">All Programs</span>
                            {hoveredAllPrograms && (
                                <div className="absolute bottom-0 left-32 text-xs w-fit z-20 bg-white border-l-blue-500 border-l-[4px] shadow-lg">
                                    <div className="hover:bg-[#2F71CD] px-1 whitespace-nowrap text-[10px]">Windows Movie Maker</div>
                                    <div className="hover:bg-[#2F71CD] px-1 whitespace-nowrap text-[10px]">Windows Messenger</div>
                                    <div className="hover:bg-[#2F71CD] px-1 whitespace-nowrap text-[10px]">Windows Media Player</div>
                                    <div className="hover:bg-[#2F71CD] px-1 whitespace-nowrap text-[10px]">Remote Assistance</div>
                                    <div className="hover:bg-[#2F71CD] px-1 whitespace-nowrap text-[10px]">Outlook Express</div>
                                    <div className="hover:bg-[#2F71CD] px-1 whitespace-nowrap text-[10px]">Internet Explorer</div>
                                    <div className="hover:bg-[#2F71CD] px-1 whitespace-nowrap text-[10px]">Startup</div>
                                    <div className="hover:bg-[#2F71CD] px-1 whitespace-nowrap text-[10px]">Games</div>
                                    <div className="hover:bg-[#2F71CD] px-1 whitespace-nowrap text-[10px]">Accessories</div>
                                    <div className="hover:bg-[#2F71CD] px-1 whitespace-nowrap text-[10px]">Windows Update</div>
                                    <div className="hover:bg-[#2F71CD] px-1 whitespace-nowrap text-[10px]">Windows Catalog</div>
                                    <div className="hover:bg-[#2F71CD] px-1 whitespace-nowrap text-[10px]">Set Program Access Details</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Side: Errors */}
                <div className="flex flex-col gap-2 bg-[#CBE3FF] p-2 border-l border-black w-[250px]">
                    {ErrorData.map((item, index) => (
                        <div
                            key={index}
                            className="relative cursor-pointer"
                            onMouseEnter={() => { if (item.list) handleMouseEnter(item.title) }}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => makeErrorTrue(index, 'Open')}
                        >
                            <div className="flex gap-1 items-center justify-between text-xs font-semibold hover:bg-[#2F71CD] hover:text-white">
                                {item.title !== 'none' ? (
                                    <div className="flex gap-1 items-center text-xs">
                                        <Image src={item.IconClose!} alt={item.title} width={22} height={22} />
                                        <div>{item.title}</div>
                                    </div>
                                ) : (
                                    <div className="w-full h-[2px] bg-gradient-to-r from-[#CBE3FF] via-[#979797] to-[#CBE3FF]" />
                                )}
                                {item.list && <div className="pr-4">{'>'}</div>}
                            </div>
                            {hoveredItem === item.title && item.list && (
                                <div className="absolute left-full bottom-[10%] w-fit z-20 bg-white border-l-blue-500 border-l-[4px] shadow-lg">
                                    {item.list.map((subItem, subIndex) => (
                                        <div key={subIndex} className="p-1 gap-1 bg-white text-[10px] hover:bg-[#3a89ff] pr-4 whitespace-nowrap flex items-center">
                                            {subItem.IconClose && <Image src={subItem.IconClose} alt={subItem.title} width={15} />}
                                            {subItem.title}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="relative border rounded-t-lg border-black shadow-2xl">
                {showShutdownEffect && <ShutdownEffect />}
                <div className="footer flex justify-end gap-2 py-0.5 px-1 text-white bg-gradient-to-t to-[#428EE9] bg-[#0E60CB] from-[#0E60CB]">
                    <div className="flex items-center gap-1 rounded hover:brightness-110 hover:bg-[#3a89ff] cursor-pointer p-1">
                        <Image src={Logout} alt="Logout" width={23} />
                        <div className="text-xs">Log Off</div>
                    </div>
                    <div
                        className="flex items-center gap-1 rounded hover:brightness-110 hover:bg-[#3a89ff] cursor-pointer p-1"
                        onClick={handleShutdownClick}
                    >
                        <Image src={Power_Off} alt="Power Off" width={23} />
                        <div className="text-xs">Turn Off Computer</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartComponents;
