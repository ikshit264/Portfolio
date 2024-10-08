import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import FolderContent from '../components/FolderContent';
import MyContent from '../components/MyContent'; // Assuming this is the correct import
import Exit from '@/../public/Exit.png';
import Minimize from '@/../public/Minimize.png';
import Maximize from '@/../public/Maximize.png';
import "../TemplateForTabs/template.css";
import { ChildComponentProps } from '@/Types/Interfaces';
import { Rnd } from 'react-rnd';
import { AllFolders } from '@/Data/All-Data';
import { useStateManagement } from '@/recoil/useStateManagement';

type This = ChildComponentProps & {
    FolderContentAppaer?: boolean;
};

const SimpleTab: React.FC<This> = ({ index, icon, Title, FolderContentAppaer }) => {
    const { Open, Min, Max, makeFalse, makeTrue, IsFront } = useStateManagement();

    const [width, setWidth] = useState(800);
    const [height, setHeight] = useState(500);
    const [position, setPosition] = useState({ 
        x: AllFolders[index!].Position.x, 
        y: AllFolders[index!].Position.y 
    });
    
    const maxWidth = useRef(window.innerWidth);
    const maxHeight = useRef(window.innerHeight);
    const [store, setStore] = useState({ width, height, position });

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
            setStore({ width, height, position });
            setWidth(maxWidth.current);
            setHeight(maxHeight.current - 28); // Accounting for header/footer height
            setPosition({ x: 0, y: 0 });
            makeTrue(index!, 'max');
        } else {
            makeFalse(index!, 'max');
            setWidth(store.width);
            setHeight(store.height);
            setPosition(store.position);
        }
    };

    const FolderComponent = AllFolders[index!]?.Component;

    return (
        <div onClick={() => { makeTrue(index!, 'open') }}>
            <Rnd
                size={{ width, height }}
                position={position}
                dragHandleClassName='handle'
                minWidth={200}
                minHeight={100}
                maxWidth={maxWidth.current}
                maxHeight={maxHeight.current}
                bounds="body"
                onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
                onResizeStop={(e, direction, ref, delta, position) => {
                    setWidth(parseInt(ref.style.width));
                    setHeight(parseInt(ref.style.height));
                    setPosition(position);
                }}
                className={`border-2 border-[#225AD8] rounded-t-sm resizeable-box overflow-hidden bg-white ${Min[index!] ? 'hidden' : ''}`}
                style={{ zIndex: IsFront === index ? 10 : 1 }}
            >
                <div className="handle flex justify-between cursor-move p-2 bg-[#225AD8]" onClick={() => { makeTrue(index!, 'open') }}>
                    <div className="flex gap-2 text-white">
                        <Image src={icon!} alt={Title!} width={25} height={25} />
                        {Title}
                    </div>
                    <div className="flex gap-1">
                        <div onClick={() => makeTrue(index!, 'min')} className="cursor-pointer hover:brightness-110">
                            <Image src={Minimize} alt="Minimize" width={25} height={25} />
                        </div>
                        <div onClick={handleMax} className="cursor-pointer hover:brightness-110">
                            <Image src={Maximize} alt="Maximize" width={25} height={25} />
                        </div>
                        <div onClick={(e) => {
                            e.stopPropagation();
                            makeFalse(index!, 'open')
                        }} className="cursor-pointer hover:brightness-110">
                            <Image src={Exit} alt="Close" width={25} height={25} />
                        </div>
                    </div>
                </div>
                <div className="px-2 bg-[#F0F0E7]">
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
                <div className="flex h-full justify-center w-full cursor-auto">
                    <div className="overflow-y-auto min-w-[200px] flex-col bg-[#687FF5] border-2 border-white flex justify-start"
                        style={{ height: `calc(100% - 133px)`, pointerEvents: 'none' }}
                    >
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
                    <div className="bg-white border-2 border-slate-500 overflow-y-auto"
                        style={{ height: `calc(100% - 135px)`, width: `100%`, pointerEvents: 'auto' }}
                    >
                        {FolderComponent ? <FolderComponent /> : <div>No component found</div>}
                    </div>
                </div>
            </Rnd>
        </div>
    );
};

export default SimpleTab;
