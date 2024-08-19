import React from 'react'
import { NavbarTabs } from '@/Data/NavBar'

const NavComp = () => {
  return (
    <div className='flex p-0.5 flex-wrap bg-[#F0F0E7]'>
      {
        NavbarTabs.map((name, index)=>(
          <div key={index} className='hover:bg-zinc-400 px-1 '>
            {name.name}
          </div>
        ))
      }
      <div>
        {/* <input type="text" /> */}
      </div>
    </div>
  )
}

export default NavComp;
