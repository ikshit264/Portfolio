import React from 'react';
import Image from 'next/image';
import SrishtiSolo from "@/../public/Srish.png";
import fullSrishti from "@/../public/SrishBG.png";

const Make_Yourself_Public = () => {
  return (
    <div className='h-[100%] relative'>
      <Image src={fullSrishti} alt='full srish' sizes='25'/>
      <div 
        className='absolute z-10 top-full stroke-current'
        style={{
          padding: '10px', // Space around the image for the rainbow border
          borderRadius: '0%', // This might not be necessary depending on the image shape
          background: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
          backgroundSize: '800% 400%', // To ensure smooth transitions in the animation
          animation: 'rainbowTrace 10s linear infinite',
          maskImage: `url(${SrishtiSolo.src})`, // Using the image as a mask
          WebkitMaskImage: `url(${SrishtiSolo.src})`, // For Webkit-based browsers
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      >
        <Image src={SrishtiSolo} alt='Srish Solo'/>
      </div>
      <style jsx>{`
        @keyframes rainbowTrace {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Make_Yourself_Public;
