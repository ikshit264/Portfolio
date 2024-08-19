import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import MyContent from '../components/MyContent';
import NavBar from '../components/NavBar';
import FolderContent from '../components/FolderContent';
import Exit from '@/../public/Exit.png';
import Minimize from '@/../public/Minimize.png';
import Maximize from '@/../public/Maximize.png';
import "../TemplateForTabs/template.css";
import { ChildComponentProps } from '@/Types/Interfaces';
import { ResizableBox } from 'react-resizable';
import { AllFolders } from '@/Data/All-Data';
import { useStateManagement } from '@/recoil/useStateManagement';

type This = ChildComponentProps & {
    FolderContentAppaer?: boolean;
}

const SimpleTab: React.FC<This> = ({ index, icon, Title, FolderContentAppaer }) => {
    const { Open, Min, Max, makeFalse, makeTrue } = useStateManagement();

    const [width, setWidth] = useState(800);
    const [height, setHeight] = useState(500);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const maxWidth = useRef(window.innerWidth);
    const maxHeight = useRef(window.innerHeight);
    const [Store, setStore] = useState({ width, height });

    useEffect(() => {
        const handleResize = () => {
            maxWidth.current = window.innerWidth;
            maxHeight.current = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMax = () => {
        if (!Max[index!]) {
            setStore({ width, height });
            setWidth(maxWidth.current);
            setHeight(maxHeight.current - 28);
            makeTrue(index!, 'max');
        } else {
            makeFalse(index!, 'max');
            setWidth(Store.width);
            setHeight(Store.height);
        }
        setPosition({ x: 0, y: 0 });
    };

    // Safe access to FolderComponent
    const FolderComponent = AllFolders[index!]?.Component;

    const onResizeStop = (event: any, { size }: any) => {
        setWidth(size.width);
        setHeight(size.height);
    };

    return (
        <>
            <ResizableBox
                className={`border-2 border-[#225AD8] rounded-t-sm resizeable-box overflow-hidden bg-white ${Min[index!] ? 'hidden' : ''}`}
                width={width}
                height={height}
                minConstraints={[2, 2]}
                maxConstraints={[maxWidth.current, maxHeight.current]}
                onResizeStop={onResizeStop}
                resizeHandles={['n', 's', 'e', 'w']}
                style={{ transition: 'all 0.05s ease' }} // Smooth transition
            >
                <div className={`handle flex justify-between cursor-move p-2 bg-[#225AD8]`}>
                    <div className='flex gap-2 text-white'>
                        <div>
                            <Image src={icon!} alt={Title!} width={25} height={25} />
                        </div>
                        {Title}
                    </div>
                    <div className='flex gap-1'>
                        <div onClick={() => makeTrue(index!, 'min')} className='cursor-pointer hover:brightness-110'>
                            <Image src={Minimize} alt='Minimize' width={25} height={25} />
                        </div>
                        <div onClick={handleMax} className='cursor-pointer hover:brightness-110'>
                            <Image src={Maximize} alt='Maximize' width={25} height={25} />
                        </div>
                        <div onClick={() => makeFalse(index!, 'open')} className='cursor-pointer hover:brightness-110'>
                            <Image src={Exit} alt='close' width={25} height={25} />
                        </div>
                    </div>
                </div>
                <div className='px-2 bg-[#F0F0E7]'>
                    <NavBar 
                        index={index} 
                        Title={Title} 
                        Max={Max} 
                        Min={Min} 
                        Open={Open} 
                        makeFalse={makeFalse} 
                        icon={AllFolders[index!]?.IconClose} 
                        makeTrue={makeTrue} 
                    />
                </div>
                <div className='flex h-full justify-center w-full'>
                    <div className='overflow-y-auto min-w-[200px] flex-col bg-[#687FF5] border-2 border-white flex justify-start' 
                         style={{ height: `calc(100% - 133px)` }}>
                        {FolderContentAppaer && (
                            <FolderContent 
                                index={index} 
                                Max={Max} 
                                Min={Min} 
                                Open={Open} 
                                makeFalse={makeFalse} 
                                makeTrue={makeTrue} 
                            />
                        )}
                        <MyContent />
                    </div>
                    <div className='bg-white border-2 border-slate-500 overflow-y-auto' 
                         style={{ height: `calc(100% - 135px)`, width: `100%` }}>
                        {/* Render the component if it exists */}
                        {FolderComponent ? <FolderComponent /> : <div>No component found</div>}
                    </div>
                </div>
            </ResizableBox>
        </>
    );
};

export default SimpleTab;
