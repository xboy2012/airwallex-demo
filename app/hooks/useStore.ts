import type { StoreType } from '../types';
import { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';

export const useStore = (): StoreType => {
  return useContext(StoreContext);
};
