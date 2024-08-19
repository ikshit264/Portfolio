import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ChildComponentProps } from '@/Types/Interfaces';
import './Template.css';
import 'react-resizable/css/styles.css';
import SimpleTab from '../TabTypes/SimpleTab';
import ErrorTab from '../TabTypes/ErrorTab';
import CMD from '@/Components/TabTypes/CMD';
import { useStateManagement } from '@/recoil/useStateManagement';

const Template: React.FC<ChildComponentProps & { Tab: 'SimpleTab' | 'ErrorTab' | 'CMD' }> = ({ index, icon, Title, Tab,}) => {
  const { Open, Min, Max, IsFront, makeFalse, makeTrue } = useStateManagement();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Function to render the appropriate tab component
  const renderTab = () => {
    switch (Tab) {
      case 'SimpleTab':
        return (
          <SimpleTab
            Title={Title}
            icon={icon}
            index={index}
            Open={Open}
            Max={Max}
            Min={Min}
            makeTrue={makeTrue}
            makeFalse={makeFalse}
          />
        );
      case 'ErrorTab':
        return (
          <ErrorTab
            Title={Title}
            icon={icon}
            index={index}
          />
        );
      case 'CMD':
        return <CMD index = {index} icon = {icon} Title = {Title} />;
      default:
        return null;
    }
  };

  return (
    <div className={`${Max[index!] ? 'absolute top-0 z-10' : ''} ${(IsFront === index) ? 'z-10' : 'z-0'}`}>
      <Draggable
        handle=".handle"
        bounds="body"
        position={Max[index!] ? { x: 0, y: 0 } : position}
        onStop={(e, data) => setPosition({ x: data.x, y: data.y })}
      >
        <div style={{ position: 'absolute' }} className={`rounded-s ${Max[index!] ? 'top-0' : ''}`}>
          {renderTab()}
        </div>
      </Draggable>
    </div>
  );
};

export default Template;
