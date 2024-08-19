import { useRecoilState } from 'recoil';
import { isOpenState, isMinimizedState, isMaximizedState, IsFrontState } from './atoms';
import { useState } from 'react';

// Custom hook to manage state updates
export const useStateManagement = () => {
  const [Open, setIsOpen] = useRecoilState(isOpenState);
  const [Min, setIsMin] = useRecoilState(isMinimizedState);
  const [Max, setIsMax] = useRecoilState(isMaximizedState);
  const [IsFront, setIsFront] = useRecoilState(IsFrontState);

  const makeFalse = (index: number, name: string) => {
    // if (index < 0 || index >= Open.length) return;

    if (name === 'open') {
      setIsOpen((prev) => {
        const newState = [...prev];
        newState[index] = false;
        return newState;
      });
      makeFalse(index, 'max');
      makeFalse(index, 'min');
    }
    if (name === 'max') {
      setIsMax((prev) => {
        const newState = [...prev];
        newState[index] = false;
        return newState;
      });
    }
    if (name === 'min') {
      setIsMin((prev) => {
        const newState = [...prev];
        newState[index] = false;
        return newState;
      });
    }
  };

  const makeTrue = (index: number, name: string) => {
    // if (index < 0 || index >= Open.length) return;

    
    if (name === 'open') {
      setIsOpen((prev) => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
      setIsFront(index);
    }
    if (name === 'max') {
      if (Open[index]) {
        setIsMax((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
        setIsFront(index);
      }
    }
    if (name === 'min') {
      if (Open[index]) {
        setIsMin((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }
    }
    // console.log(IsFront);
  };

  return { Open, Min, Max, IsFront, makeFalse, makeTrue };
};
