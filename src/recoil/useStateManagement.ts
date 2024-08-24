import { useRecoilState } from 'recoil';
import { isOpenState, isMinimizedState, isMaximizedState, IsFrontState } from './atoms';

export const useStateManagement = () => {
  const [Open, setIsOpen] = useRecoilState(isOpenState);
  const [Min, setIsMin] = useRecoilState(isMinimizedState);
  const [Max, setIsMax] = useRecoilState(isMaximizedState);
  const [IsFront, setIsFront] = useRecoilState(IsFrontState);

  const makeFalse = (index: number, name: string) => {
    if (index < 0 || index >= Open.length) return;

    const updateState = (setter: any) => {
      setter((prev: boolean[]) => {
        const newState = [...prev];
        newState[index] = false;
        return newState;
      });
    };

    if (name === 'open') {
      updateState(setIsOpen);
      makeFalse(index, 'max');
      makeFalse(index, 'min');
    } else if (name === 'max') {
      updateState(setIsMax);
    } else if (name === 'min') {
      updateState(setIsMin);
    }
  };

  const makeTrue = (index: number, name: string) => {
    if (index < 0 || index >= Open.length) return;

    const updateState = (setter: any) => {
      setter((prev: boolean[]) => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
    };

    if (name === 'open') {
      updateState(setIsOpen);
      setIsFront(index);
    } else if (name === 'max') {
      if (Open[index]) updateState(setIsMax);
      setIsFront(index);
    } else if (name === 'min') {
      if (Open[index]) updateState(setIsMin);
      // setIsFront(index);
    }
  };

  return { Open, Min, Max, IsFront, makeFalse, makeTrue };
};
