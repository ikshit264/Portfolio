import React from 'react'
import NavComp from '../Tabs/NavComp'
import Interactions from '../Tabs/Interactions'
import AddressTab from '../Tabs/AddressTab'
import { ChildComponentProps } from '@/Types/Interfaces'
import { useStateManagement } from '@/recoil/useStateManagement'

const NavBar: React.FC<ChildComponentProps> = ({ index, icon, Title, Desctiption}) => {
  const { Open, Min, Max, makeFalse, makeTrue } = useStateManagement();

  // console.log(Title)
  return (
    <div className='w-full flex flex-col gap-[1px] bg-white'>
      <NavComp />
      <Interactions index={index} Max={Max} Min={Min} Open={Open} makeFalse={makeFalse} makeTrue={makeTrue} />
      <AddressTab index={index} Title={Title} Max={Max} Min={Min} Open={Open} makeFalse={makeFalse} makeTrue={makeTrue} icon={icon}/>
    </div>
  )
}

export default NavBar
