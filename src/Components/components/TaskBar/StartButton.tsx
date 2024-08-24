'use client'
import React, { useState, useEffect, useRef } from 'react';
import StartBtn from '@/../public/StartButton.png';
import Start_Dots from '@/../public/Start_Dots.png';
import Image from 'next/image';
import StartComponents from './StartComponents';
import { ChildComponentProps } from '@/Types/Interfaces';
import { useStateManagement } from '@/recoil/useStateManagement';

const StartButton: React.FC<ChildComponentProps> = () => {
  const { Open, Min, Max, makeFalse, makeTrue } = useStateManagement();

  const [Start, setStart] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const startButtonRef = useRef<HTMLDivElement>(null);
  const startComponentsRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      startButtonRef.current &&
      !startButtonRef.current.contains(event.target as Node) &&
      startComponentsRef.current &&
      !startComponentsRef.current.contains(event.target as Node)
    ) {
      setStart(false);
    }
  };

  useEffect(() => {
    if (Start) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [Start]);

  const handleClick = () => {
    setStart(!Start);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 150);
  };

  return (
    <div className='relative' ref={startButtonRef}>
      {Start && (
        <div className='absolute bottom-full' ref={startComponentsRef} onClick={()=>handleClick()}>
          <StartComponents Open={Open} Max={Max} Min={Min} makeTrue={makeTrue} makeFalse={makeFalse} />
        </div>
      )}
      <div onClick={handleClick} className='flex gap-3 cursor-pointer'>
        <Image
          src={StartBtn}
          alt='Start'
          height={27}
          className={`border-r rounded-r-xl bg-[#18621C] border-[#18621C] ${isClicked ? 'brightness-110' : ''}`}
        />
        <Image
          src={Start_Dots}
          alt='Start Dots'
          width={8}
        />
      </div>
    </div>
  );
};

export default StartButton;