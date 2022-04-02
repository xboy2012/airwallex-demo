import type { FC } from 'react';
import { useState, useMemo } from 'react';
import type { Stage, StoreType } from '../types';
import { StoreContext } from '../contexts/StoreContext';

export const StoreProvider: FC = (props) => {
  const [stage, setStage] = useState<Stage>('home');
  const contextValue: StoreType = useMemo(() => {
    return { stage, setStage };
  }, [stage]);
  return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};
