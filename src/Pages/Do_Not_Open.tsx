import CloseTheOpen from '@/Components/components/CloseTheOpen';
import Cursor from '@/../public/Cursor.png'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion"

const Do_Not_Open = () => {
  const [DivPos, setDivPos] = useState({top : 0, left : 0, bottom : 0, right : 0});
    const specificDiv = document.getElementById('Exit');
    if (specificDiv) {
      const { top, left, bottom, right } = specificDiv.getBoundingClientRect();
      setDivPos({top, left, bottom, right});
      console.log('Position:', DivPos);
    }
  return (
    
    <div onClick={() => { }}>
      DO NOT OPEN
      <div className=" text-white z-20 w-full h-full" >
        <div className={`fixed bottom-[${DivPos.bottom -100}px] right-[${DivPos.right}px] top-[${DivPos.top -100}px] left-[${DivPos.left}px]`}>
          <Image src={Cursor} alt='Cursor' width={25} height={25} />
        </div>
      </div >
    </div>
  )
}

export default Do_Not_Open
