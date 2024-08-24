import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ExitIMG from '@/../public/Exit.png';
import Minimize from '@/../public/Minimize.png';
import Maximize from '@/../public/Maximize.png';
import { CommandOutput, handleCommand } from '@/Data/CommandHandler';
import { ChildComponentProps } from '@/Types/Interfaces';
import { AllFolders } from '@/Data/All-Data';
import { useStateManagement } from '@/recoil/useStateManagement';
import { Rnd } from 'react-rnd'; // Import Rnd

type CMDProps = ChildComponentProps & {
  FolderContentAppaer?: boolean;
}

const CMD: React.FC<CMDProps> = ({ index, icon, Title, FolderContentAppaer }) => {
  const { Open, Min, Max, makeFalse, makeTrue, IsFront } = useStateManagement();

  // State variables
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(500);
  const [position, setPosition] = useState({ x: AllFolders[index!].Position.x, y: AllFolders[index!].Position.y });
  const [store, setStore] = useState({ width, height, position });
  const [Exit, setExit] = useState(false);
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<{ command: string, result: string }[]>([]);

  // References for window dimensions
  const maxWidth = useRef(window.innerWidth);
  const maxHeight = useRef(window.innerHeight);

  // Update window dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      maxWidth.current = window.innerWidth;
      maxHeight.current = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle maximize and restore window sizes
  const handleMax = () => {
    if (!Max[index!]) {
      setStore({ width, height, position });
      setWidth(maxWidth.current);
      setHeight(maxHeight.current - 28);
      setPosition({ x: 0, y: 0 });
      makeTrue(index!, 'max');
    } else {
      makeFalse(index!, 'max');
      setWidth(store.width); // Restore previous width
      setHeight(store.height); // Restore previous height
      setPosition(store.position); // Restore previous position
    }
  };

  // Safe access to FolderComponent
  const FolderComponent = AllFolders[index!]?.Component;

  // Handle command submission
  const handleCommandSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (command.trim()) {
      handleCommand(command.trim(), setOutput);
      if (command.trim() === 'exit') {
        setExit(true);
        setTimeout(() => {
          makeFalse(index!, 'open');
        }, 1500);
      }
      setCommand('');
    }
  };

  return (
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
      <div className='handle flex justify-between cursor-move p-2 bg-[#225AD8]' onClick={() => { makeTrue(index!, 'open') }}>
        <div className='flex gap-2 text-white'>
          <Image src={icon!} alt={Title!} width={25} height={25} />
          {Title}
        </div>
        <div className='flex gap-1'>
          <div onClick={() => makeTrue(index!, 'min')} className='cursor-pointer hover:brightness-110'>
            <Image src={Minimize} alt='Minimize' width={25} height={25} />
          </div>
          <div onClick={handleMax} className='cursor-pointer hover:brightness-110'>
            <Image src={Maximize} alt='Maximize' width={25} height={25} />
          </div>
          <div onClick={(e) => {
            e.stopPropagation();
            makeFalse(index!, 'open');
          }} className='cursor-pointer hover:brightness-110'>
            <Image src={ExitIMG} alt='Close' width={25} height={25} />
          </div>
        </div>
      </div>
      <div className='flex h-full justify-center w-full'>
        <div className='bg-white overflow-y-auto' style={{ height: `calc(100% - 30px)`, width: `100%` }}>
          <div className='p-4 bg-gray-800 shadow-lg font-mono h-full max-w-full overflow-y-auto'>
            <div className="text-green-400 mb-2">Welcome to the terminal!</div>
            <div className="space-y-2 text-green-400">
              {output.map((elem, index) => (
                <div key={index}>
                  <div><span className='text-purple-600'>@ikshit04 </span>{`> ${elem.command}`}</div>
                  <div>{elem.result}</div>
                </div>
              ))}
            </div>
            <form onSubmit={handleCommandSubmit} className="mt-2 flex">
              <span className="flex text-green-400 gap-1"><span className='text-purple-600'>@ikshit04 </span> {'>'}</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className="bg-transparent border-none outline-none ml-2 w-full text-white"
                placeholder='help'
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>
    </Rnd>
  );
};

export default CMD;
