import Image from 'next/image'
import React, { useState } from 'react'
import Critical from '@/../public/Critical.png'
import Exit from '@/../public/Exit.png';
import { ChildComponentProps } from '@/Types/Interfaces';
import { useStateErrorManagement } from '@/recoil/useStateErrorManagement';

const ErrorTab: React.FC<ChildComponentProps> = ({ index, icon, Title }) => {
    const [IsActive, setIsActive] = useState<Boolean>(false);
    const { OpenError, MinError, MaxError, makeErrorFalse, makeErrorTrue } = useStateErrorManagement();

    const handleClick = () => {
        setIsActive(true);
        setTimeout(() => {
            makeErrorFalse(index!, 'Open');
        }, 250)
    }

    return (
        <div className='w-[400px] border-2 rounded border-blue-800'>
            <div className='handle flex justify-between cursor-move p-2 bg-[#225AD8]  gap-2'>
                <div className='flex gap-2 text-white'>
                    <Image src={Critical} alt='Error' width={25} height={25} />
                    <span>C:/</span>
                </div>
                <div onClick={() => makeErrorFalse(index!, 'Open')} className='cursor-pointer hover:brightness-110'>
                    <Image src={Exit} alt='close' width={25} height={25} />
                </div>
            </div>
            <div className='bg-slate-100 p-2'>
                <div className='flex gap-4 justify-start p-2 items-center'>
                    <Image src={Critical} alt='Error' width={35} height={35} />
                    <div>
                        <div>C:/</div>
                        <div>Application Not Found</div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <button onClick={() => handleClick()} className={`px-4 border-2 border-black ${IsActive ? 'shadow-black shadow-inner' : ''}`}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ErrorTab
