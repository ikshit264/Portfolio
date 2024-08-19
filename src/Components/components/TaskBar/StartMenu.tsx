import React from 'react'
import StartButton from './StartButton'
import { ChildComponentProps } from '@/Types/Interfaces'
import StartMenuRight from './StartMenuRight'
import AllOpenTabs from './AllOpenTabs'

const StartMenu: React.FC<ChildComponentProps> = ({ Open, Max, Min, makeTrue, makeFalse }) => {
  return (
    <div className='fixed bottom-0 w-full bg-[#245DDB]'>
      <div className='flex justify-between'>
        <div className='flex gap-3 h-full items-center'>
          <StartButton Open={Open}
            Max={Max}
            Min={Min}
            makeTrue={makeTrue}
            makeFalse={makeFalse} />
          <AllOpenTabs Open={Open}
            Max={Max}
            Min={Min}
            makeTrue={makeTrue}
            makeFalse={makeFalse} />
        </div>
        <div className=' h-full'>
          <StartMenuRight />
        </div>
      </div>
    </div>
  )
}

export default StartMenu
