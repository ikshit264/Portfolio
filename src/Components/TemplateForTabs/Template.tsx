import React from 'react';
import { Rnd } from 'react-rnd';
import { ChildComponentProps } from '@/Types/Interfaces';
import SimpleTab from '../TabTypes/SimpleTab';
import ErrorTab from '../TabTypes/ErrorTab';
import CMD from '@/Components/TabTypes/CMD';
import { useStateManagement } from '@/recoil/useStateManagement';
import { ErrorData } from '@/Data/All-Error-Data';
import { AllFolders } from '@/Data/All-Data';
import { useStateErrorManagement } from '@/recoil/useStateErrorManagement';
import { useDraggableResizable } from '../components/useDraggableResizable';

const Template: React.FC<ChildComponentProps & { Tab: 'SimpleTab' | 'ErrorTab' | 'CMD' }> = ({ index, icon, Title, Tab }) => {
    const { Open, Min, Max, IsFront, makeFalse, makeTrue } = useStateManagement();
    const { OpenError, MinError, MaxError, IsFrontError, makeErrorFalse, makeErrorTrue } = useStateErrorManagement();

    const initialPosition = Tab === 'ErrorTab'
        ? { x: ErrorData[index!].Position.x, y: ErrorData[index!].Position.y }
        : { x: AllFolders[index!].Position.x, y: AllFolders[index!].Position.y };

    const { size, position, setSize, setPosition, maxWidth, maxHeight, onResizeStop } = useDraggableResizable({ width: 400, height: 300 }, initialPosition);

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
                return <ErrorTab Title={Title} icon={icon} index={index} />;
            case 'CMD':
                return <CMD index={index} icon={icon} Title={Title} />;
            default:
                return null;
        }
    };

    return (
        <div className={`${Max[index!] && Tab === 'SimpleTab' ? ' top-0 z-10 bg-transparent' : ''} `}>
            <div className='absoulte'>
                {renderTab()}
            </div>
        </div>
    );
};

export default Template;
