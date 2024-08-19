import React, { useEffect, useState } from 'react';
import Speaker from '@/../public/Speaker.png';
import Data_Send from '@/../public/Data_Send.png';
import Shield_Deactivate from '@/../public/Shield_Deactivate.png';
import Image from 'next/image';
import LittleInfo from './LittleInfo';

const StartMenuRight = () => {
  const [currTime, setCurrTime] = useState("");
  const [LittleInfoState, setLittleInfo] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      setCurrTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    updateTime();

    const interval = setInterval(() => {
      updateTime();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () =>{
    setLittleInfo(!LittleInfoState)
  }

  return (
    <>
    {LittleInfoState && <LittleInfo />}
      <div className={`flex cursor-pointer justify-center h-full absolute right-0 bg-[#0E8EEA] border-l-[#16B7FD] px-1 ${!LittleInfoState ? ' shadow-[#000000] bg-[#408BE6] shadow-sm' : 'bg-[#205eaa] shadow-inner shadow-[#5e5e5e]'}`} onClick={handleClick}>
        <div className='flex gap-1  justify-center items-center'>
          <Image src={Speaker} alt='Speaker' width={20} />
          <Image src={Data_Send} alt='Data Send' width={20} />
          <Image src={Shield_Deactivate} alt='Shield Deactivate' width={20} />
          <span className='text-white px-1 text-sm whitespace-nowrap'>{currTime || 'Loading...'}</span>
        </div>
      </div>
    </>
  );
};

export default StartMenuRight;
