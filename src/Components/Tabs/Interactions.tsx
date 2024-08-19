import React, { useState } from 'react'
import Image from 'next/image'
import Backword from '@/../public/Back.png'
import Search from '@/../public/Search.png'
import Favorite from '@/../public/Favorites.png'
import Forword from '@/../public/Forward.png'
import IE_Stop from '@/../public/IE_Stop.png'
import HLP from '@/../public/HLP.png'
import Printer from '@/../public/Printer.png'
import Blog from '@/../public/Blogs.png'
import Email from '@/../public/Email.png'
import IE_Media from '@/../public/IE_Media.png'
import IE_Refresh from '@/../public/IE_Refresh.png'
import Email_Icon from '@/../public/Email_Icon.png';
import IE_Home from '@/../public/IE_Home.png'
import HelpBox from '@/Pages/InfoTabs'
import Link from 'next/link';
import { ChildComponentProps } from '@/Types/Interfaces'
import { useStateManagement } from '@/recoil/useStateManagement'

const Interactions: React.FC<ChildComponentProps> = ({ index, icon, Title, Desctiption}) => {
  const { Open, Min, Max, makeFalse, makeTrue } = useStateManagement();

  const [Help, setHelp] = useState<Boolean>(false);

  const handleEmailClick = () => {
    const email = 'ikshit.talera@gmail.com';
    const subject = 'Hello from your website';
    const body = `Hi there, I wanted to get in touch with you. User Email: `;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleHome = () => {
    let i = 0;
    const Variable = Open.map((value, index) => value ? index : null).filter(index => index !== null);
    const intervalID = setInterval(() => {
      if (i < Variable.length) {
        makeTrue(Variable[i], 'min');
        console.log(Variable[i])
        i++;
      } else {
        clearInterval(intervalID); // Clear the interval once done
      }
    }, 300);
  };

  const HandleRefresh = () => {
    makeFalse(index!, 'open')
    setTimeout(() => {
      makeTrue(index!, 'open');
    }, 1000);
  }


  return (
    <div className='flex gap-2 border-t-[1px] border-[#E2DECD] bg-[#F0F0E7] h-10 w-full'>
      <div className='flex gap-1 border-r-[2px] pr-2 border-r-white'>
        <div className='flex items-center p-0.5 gap-3'>
          <div className='flex items-center justify-center p-1 gap-2 w-[7.4rem] hover:border border-black rounded hover:bg-slate-200 hover:cursor-pointer'>
            <Image src={Backword} alt='Backword' width={25} height={20}></Image>
            <span>BackWord</span>
          </div>
          <div className='flex items-center justify-center p-1 hover:border w-[35px] border-black rounded hover:bg-slate-200 hover:cursor-pointer'>
            <Image src={Forword} alt='Forward' width={25} height={20} className='place-self-center'></Image>
          </div>
        </div>
        <div className='flex items-center p-0.5 gap-1'>
          <div className='flex items-center hover:border justify-center p-1 w-[35px] border-black rounded hover:bg-slate-200 hover:cursor-pointer' onClick={() => { makeFalse(index!, 'open') }}>
            <Image src={IE_Stop} alt='IE_Stop' width={25} height={20}></Image>
          </div>
          <div className='flex items-center justify-center p-1 hover:border w-[35px] border-black rounded hover:bg-slate-200 hover:cursor-pointer' onClick={HandleRefresh}>
            <Image src={IE_Refresh} alt='IE_Refresh' width={25} height={20}></Image>
          </div>
          <div className='flex items-center justify-center p-1 hover:border w-[35px] border-black rounded hover:bg-slate-200 hover:cursor-pointer' onClick={handleHome}>
            <Image src={IE_Home} alt='IE_Home' width={25} height={20}></Image>
          </div>
        </div>
      </div>
      <div className='flex gap-1 border-r-[2px] pr-2 border-r-white items-center '>
        <span className='flex justify-center p-1 gap-1 w-[5.5rem] hover:border border-black rounded hover:bg-slate-200 hover:cursor-pointer'>
          <Image src={Search} alt='Backword' width={25} height={20}></Image>
          <span>Search</span>
        </span>
        <span className='flex justify-center p-1 gap-1 w-[5rem] hover:border border-black rounded hover:bg-slate-200 hover:cursor-pointer'>
          <Image src={Email} alt='Backword' width={25} height={20}></Image>
          <span>Email</span>
        </span>
        <span className='flex justify-center p-1 gap-1 w-[5rem] hover:border border-black rounded hover:bg-slate-200 hover:cursor-pointer'>
          <Image src={IE_Media} alt='Backword' width={25} height={20}></Image>
          <span>Media</span>
        </span>
      </div>
      <div className='flex gap-1 items-center'>
        <span>
          <span className='flex justify-center p-1 w-[35px] hover:border border-black rounded hover:bg-slate-200 hover:cursor-pointer' onClick={handleEmailClick}>
            <Image src={Blog} alt='Backword' width={25} height={20}></Image>
          </span>
        </span>
        <span>
          <span className='flex justify-center p-1 gap-1 w-[35px] hover:border border-black rounded hover:bg-slate-200 hover:cursor-pointer'>
            <Image src={Printer} alt='Backword' width={25} height={20}></Image>
          </span>
        </span>
        <span>
          <Link href={'/Help'}>
            <span className='flex justify-center p-1 gap-1 w-[35px] hover:border border-black rounded hover:bg-slate-200 hover:cursor-pointer'>
              <Image src={HLP} alt='Backword' width={25} height={20}></Image>
            </span>
          </Link>
        </span>
      </div>
    </div>
  )
}

export default Interactions
