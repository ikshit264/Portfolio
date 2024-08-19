import React from 'react';

const LittleInfo = () => {
  return (
    <div className='fixed right-[0px] w-[30%] bottom-[30px] p-4 bg-[#c0c0c0] border border-[#000000] shadow-md rounded-lg'>
      <div className='text-center'>
        <h1 className='text-xl font-bold text-[#000080]'>Good Morning Bhai!</h1>
        <p className='text-sm mt-2 text-[#000000]'>Welcome to my portfolio site.</p>
        <p className='text-sm text-[#000000]'>I'm Ikshit Talera, and I'm passionate about building exceptional web experiences.</p>
        <a 
          href='https://github.com/YourGithubUsername'
          target='_blank' 
          rel='noopener noreferrer' 
          className='inline-block mt-4 text-[#0000ff] hover:text-[#ff0000] underline'
        >
          Visit my GitHub
        </a>
      </div>
    </div>
  );
}

export default LittleInfo;
