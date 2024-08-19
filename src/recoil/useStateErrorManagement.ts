import { useRecoilState } from 'recoil';
import { isOpenErrorState, isMinimizedErrorState, isMaximizedErrorState, IsFrontState } from './atoms';
import { useState } from 'react';

// Custom hook to manage state updates
export const useStateErrorManagement = () => {
  const [OpenError, setIsOpenError] = useRecoilState(isOpenErrorState);
  const [MinError, setIsMinError] = useRecoilState(isMinimizedErrorState);
  const [MaxError, setIsMaxError] = useRecoilState(isMaximizedErrorState);
  // const [IsFront, setIsFront] = useRecoilState(IsFrontState);

  const makeErrorFalse = (index: number, name: string) => {
    // if (index < 0 || index >= OpenError.length) return;

    if (name === 'Open') {
      setIsOpenError((prev) => {
        const newState = [...prev];
        newState[index] = false;
        return newState;
      });
      makeErrorFalse(index, 'Max');
      makeErrorFalse(index, 'Min');
    }
    if (name === 'Max') {
      setIsMaxError((prev) => {
        const newState = [...prev];
        newState[index] = false;
        return newState;
      });
    }
    if (name === 'Min') {
      setIsMinError((prev) => {
        const newState = [...prev];
        newState[index] = false;
        return newState;
      });
    }
  };

  const makeErrorTrue = (index: number, name: string) => {
    // if (index < 0 || index >= OpenError.length) return;

    // setIsFront(index);

    if (name === 'Open') {
      setIsOpenError((prev) => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
    }
    if (name === 'Max') {
      if (OpenError[index]) {
        setIsMaxError((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }
    }
    if (name === 'Min') {
      if (OpenError[index]) {
        setIsMinError((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }
    }
  };

  // TODO : Add IsFront in this. 

  return { OpenError, MinError, MaxError, makeErrorFalse, makeErrorTrue };
};
