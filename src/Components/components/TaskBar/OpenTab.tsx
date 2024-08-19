import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ChildComponentProps } from '@/Types/Interfaces';
import { useStateManagement } from '@/recoil/useStateManagement';


const OpenTab: React.FC<ChildComponentProps> = ({ Title, icon, index }) => {
  const { Open, Min, Max, makeFalse, makeTrue } = useStateManagement();

  const [Click, setClick] = useState(Min[index!]);

  const handleClick = (index: number) => {
    if (!Min[index])
      makeTrue(index, 'min')
    else
      makeFalse(index, 'min')
  }
  useEffect(() => {
    setClick(Min[index!])

  }, [Min, index])
  return (
    <div className={`flex items-center gap-1 hover:cursor-pointer ${Click ? ' shadow-black bg-[#408BE6] shadow-sm' : 'bg-[#205eaa] shadow-inner shadow-black'} p-0.5 pl-3 min-w-4  hover:brightness-110 w-32`} onClick={() => handleClick(index!)}>
      <Image src={icon!} alt={Title?.toString()!} width={18} height={20} />
      <span className='whitespace-nowrap overflow-hidden text-ellipsis text-sm text-white'>{Title}</span>
    </div>
  );
}

export default OpenTab;
