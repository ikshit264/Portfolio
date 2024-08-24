import { useRecoilState } from 'recoil';
import { isOpenErrorState, isMinimizedErrorState, isMaximizedErrorState, IsFrontErrorState } from './atoms';


// Custom hook to manage state updates
export const useStateErrorManagement = () => {
  const [OpenError, setIsOpenError] = useRecoilState(isOpenErrorState);
  const [MinError, setIsMinError] = useRecoilState(isMinimizedErrorState);
  const [MaxError, setIsMaxError] = useRecoilState(isMaximizedErrorState);
  const [IsFrontError, setIsFrontError] = useRecoilState(IsFrontErrorState);

  const makeErrorFalse = (index: number, name: string) => {
    if (index < 0 || index >= OpenError.length) return;

    const updateState = (setter: any) => {
      setter((prev: boolean[]) => {
        const newState = [...prev];
        newState[index] = false;
        return newState;
      });
    };
    
    if (name === 'Open') {
      updateState(setIsOpenError)
      // makeErrorFalse(index, 'Max');
      // makeErrorFalse(index, 'Min');
    }

    // if (name === 'Max') {
    //   updateState(setIsMaxError)
    // }
    
    // if (name === 'Min') {
    //   updateState(setIsMinError)
    // }
  };
  
  const makeErrorTrue = (index: number, name: string) => {
    if (index < 0 || index >= OpenError.length) return;

    const updateState = (setter: any) => {
      setter((prev: boolean[]) => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
    };

    if (name === 'Open') {
      updateState(setIsOpenError);
      setIsFrontError(index);
    }

    // if (name === 'Max') {
    //   if (OpenError[index]) {
    //     updateState(setIsMaxError)
    //     setIsFrontError(index);
    //   }
    // }
    // if (name === 'Min') {
    //   if (OpenError[index]) {
    //     updateState(setIsMinError)
    //   }
    // }
  };

  // TODO : Add IsFront in this.  Done

  return { OpenError, MinError, MaxError, IsFrontError, makeErrorFalse, makeErrorTrue };
};
