import Link from 'next/link';
import React from 'react';
import DoubleUpARrow from '@/../public/Double_Arrow_Up.png'
import Image, { StaticImageData } from 'next/image';

interface Social {
    image: StaticImageData;
    Description: string;
    link: string;
}

interface MyProps {
    title: string,
    socials: Social[];
}

const Content: React.FC<MyProps> = ({ title, socials }) => {
    // Provide a default value or handle the undefined case
    if (!socials || socials.length === 0) {
        return <div>No social links available</div>;
    }

    return (
        <div className='flex flex-col justify-start rounded-md m-2 items-start '>
            <div className='flex justify-between bg-gradient-to-r w-full from-[#F0F0FF] to-[#A2B5F3] px-2 rounded-t-sm text-md text-[#0C327D] font-bold'>
                <div>
                    {title}
                </div>
                <Image src={DoubleUpARrow} width={25} height={25} alt='DoubleUp'/>
            </div>
            <div className='flex flex-col bg-gradient-to-r from-[#B4C8FB] via-[#A6BAFB] to-[#B3C7FB] w-full gap-1 py-2'>
                {socials.map((social, index) => (
                    <div key={index} className='flex items-center justify-start gap-1 text-sm '>
                        <Link href={social.link} className='flex items-center pl-3 gap-1 hover:underline hover:text-blue-700'>
                            <Image src={social.image} alt={social.image.toString()} width={20} height={20}/>
                            <p>{social.Description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Content;
