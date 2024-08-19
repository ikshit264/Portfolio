import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ExitIMG from '@/../public/Exit.png';
import Minimize from '@/../public/Minimize.png';
import Maximize from '@/../public/Maximize.png';
import { CommandOutput, handleCommand } from '@/Data/CommandHandler';
import { ResizableBox } from 'react-resizable';
import { ChildComponentProps } from '@/Types/Interfaces';
import { AllFolders } from '@/Data/All-Data';
import { useStateManagement } from '@/recoil/useStateManagement';

// Define types for the props
type CMDProps = ChildComponentProps & {
  FolderContentAppaer?: boolean;
}

const CMD: React.FC<CMDProps> = ({ index, icon, Title, FolderContentAppaer }) => {
  const { Open, Min, Max, makeFalse, makeTrue } = useStateManagement();

  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(500);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Exit, setExit] = useState(false);
  const maxWidth = useRef(window.innerWidth);
  const maxHeight = useRef(window.innerHeight);
  const [store, setStore] = useState({ width, height });
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<{ command: string, result: string }[]>([]);

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
      setWidth(store.width);
      setHeight(store.height);
    }
    setPosition({ x: 0, y: 0 });
  };

  // Safe access to FolderComponent
  const FolderComponent = AllFolders[index!]?.Component;

  const onResizeStop = (event: any, { size }: any) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  const handleCommandSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (command.trim()) {
      handleCommand(command.trim(), setOutput);
      if (command.trim() === 'exit') {
        setExit(true);
        setTimeout(() => {
          makeFalse(5, 'open');
        }, 1500);
      }
      setCommand('');
    }
  };

  return (
    <>
      <ResizableBox
        className={`border-2 border-[#225AD8] rounded-t-sm resizeable-box overflow-hidden bg-white ${Min[index!] ? 'hidden' : ''}`}
        width={width}
        height={height}
        minConstraints={[200, 100]}
        maxConstraints={[maxWidth.current, maxHeight.current]}
        onResizeStop={onResizeStop}
        resizeHandles={['n', 's', 'e', 'w']}
        style={{ transition: 'all 0.05s ease' }} // Smooth transition
      >
        <div className='handle flex justify-between cursor-move pl-2 py-1 bg-[#225AD8]'>
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
            <div onClick={() => makeFalse(index!, 'open')} className='cursor-pointer hover:brightness-110'>
              <Image src={ExitIMG} alt='Close' width={25} height={25} />
            </div>
          </div>
        </div>
        <div className='flex h-full justify-center w-full'>
          <div className='bg-white overflow-y-auto' style={{ height: `100%`, width: `100%` }}>
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
      </ResizableBox>
    </>
  );
};

export default CMD;
