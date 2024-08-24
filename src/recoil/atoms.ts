import { AllFolders } from '@/Data/All-Data';
import { ErrorData } from '@/Data/All-Error-Data';
import { atom, selector } from 'recoil';

// Selector to lazily initialize the default state

const allFoldersState = selector({
  key: 'allFoldersState',
  get: () => {
    return Array(AllFolders.length).fill(false);
  },
});

const allFolderErrorState = selector({
  key : 'allErrorFoldersState',
  get: () => {
    return Array(ErrorData.length).fill(false);
  }
})

export const IsFrontState = atom<Number>({
  key: 'IsFrontState',
  default: 0,
});

export const IsFrontErrorState = atom<Number>({
  key: 'IsFrontErrorState',
  default: 0,
});

export const isOpenState = atom<boolean[]>({
  key: 'isOpenState',
  default: allFoldersState,
});

export const isMinimizedState = atom<boolean[]>({
  key: 'isMinimizedState',
  default: allFoldersState,
});

export const isMaximizedState = atom<boolean[]>({
  key: 'isMaximizedState',
  default: allFoldersState,
});

export const isOpenErrorState = atom<boolean[]>({
  key: 'isOpenErrorState',
  default: allFolderErrorState,
});

export const isMinimizedErrorState = atom<boolean[]>({
  key: 'isMinimizedErrorState',
  default: allFolderErrorState,
});

export const isMaximizedErrorState = atom<boolean[]>({
  key: 'isMaximizedErrorState',
  default: allFolderErrorState,
});
