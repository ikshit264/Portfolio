import React, { useEffect, useState } from 'react';
import OpenTab from './OpenTab';
import { AllFolders } from '@/Data/All-Data';
import { ChildComponentProps } from '@/Types/Interfaces';
import { useStateManagement } from '@/recoil/useStateManagement';

const AllOpenTabs: React.FC<ChildComponentProps> = () => {
  const { Open, Min, Max, makeFalse, makeTrue } = useStateManagement();

  const [AllOpen, setAllOpen] = useState<number[]>([]);

  useEffect(() => {
    // Directly derive AllOpen from Open
    const updatedAllOpen = Open
      .map((isOpen, index) => isOpen ? index : null)
      .filter(index => index !== null) as number[];

    setAllOpen(updatedAllOpen);
  }, [Open]); // Only depend on Open

  return (
    <div className='flex h-full flex-nowrap gap-1 overflow-x-auto max-w-full'>
      <div className='flex'>
        {AllOpen.map((index) => (
          <div key={index} className='pr-2'>
            <OpenTab
              Max={Max}
              Min={Min}
              Open={Open}
              icon={AllFolders[index].IconClose}
              Title={`${AllFolders[index].title}`}
              index={index}
              makeFalse={makeFalse}
              makeTrue={makeTrue}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOpenTabs;
