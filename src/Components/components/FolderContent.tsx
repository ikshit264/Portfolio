import React, { useState } from 'react';
import { AllFolders } from '@/Data/All-Data';
import { ChildComponentProps } from '@/Types/Interfaces';
import collaspe from '@/../public/Colaspe.png'
import Image from 'next/image';
import { useStateManagement } from '@/recoil/useStateManagement';

const FolderContent: React.FC<ChildComponentProps> = ({ index }) => {
  const { Open, Min, Max, makeFalse, makeTrue } = useStateManagement();

  const [Open1, setOpen1] = useState<Boolean>(true);
  const [Open2, setOpen2] = useState<Boolean>(false);

  return (
    <div className=' flex flex-col justify-start items-start pl-4'>
      <div className='pt-2' >
        <span className='flex items-center text-center gap-1' onClick={() => setOpen1((prev) => { return !prev })}>
          <div className=' h-3 w-3 bg-gradient-to-b from-[#F0F0FF] to-[#A2B5F3] font-bold text-xl flex items-center justify-center pb-2 rounded-[2px] border p-0.5 border-teal-600'>
            {Open1 && '+'}
            {!Open1 && '-'}
          </div>
          Ikshit_04
        </span>
        <div className={`pl-4 pt-2 ${Open1 ? '' : 'hidden'}`}>
          <span className='flex items-center gap-1' onClick={() => setOpen2((prev) => { return !prev })}>
            <div className=' h-3 w-3 bg-gradient-to-b from-[#F0F0FF] to-[#A2B5F3] font-bold text-xl flex items-center justify-center pb-2 rounded-[2px] border p-0.5 border-teal-600'>
            {Open2 && '+'}
            {!Open2 && '-'}
            </div>
            Desktop
          </span>
          <div className={`px-8 pt-2 flex flex-col gap-2 ${Open2 ? '' : 'hidden'}`}>
            {AllFolders.map((item, Index) => (
              <div key={Index} className={`flex items-center ${index === Index ? 'border-2 border-dashed px-1' : ''} cursor-pointer`} onDoubleClick={() => { makeTrue(Index, 'open'); makeFalse(Index, 'min') }}>
                <Image src={item.IconClose} alt={item.IconClose.toString()} width={20}/>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolderContent;
