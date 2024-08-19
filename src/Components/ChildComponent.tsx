import React from 'react';
import { ChildComponentProps } from '@/Types/Interfaces';
import { useStateManagement } from '@/recoil/useStateManagement';

const ChildComponent: React.FC<ChildComponentProps> = () => {
  const { Open, Min, Max, makeFalse, makeTrue } = useStateManagement();

  return (
    <div>
      <h2>Child Component</h2>
      <ul>
          <div>Open</div>
        {Open.map((item, index) => (
            <li key={index}>
            {item && item.toString()} &nbsp;
            <button onClick={() => makeTrue(index, 'open')}>Make True</button>
            <button onClick={() => makeFalse(index, 'open')}>Make False</button>
          </li>
        ))}
        <div>Min</div>
        {Min.map((item, index) => (
            <li key={index}>
            {item && item.toString()} &nbsp;
            <button onClick={() => makeTrue(index, 'min')}>Make True</button>
            <button onClick={() => makeFalse(index, 'min')}>Make False</button>
          </li>
        ))}
        <div>Max</div>
        {Max.map((item, index) => (
          <li key={index}>
            {item && item.toString()} &nbsp;
            <button onClick={() => makeTrue(index, 'max')}>Make True</button>
            <button onClick={() => makeFalse(index, 'max')}>Make False</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;
