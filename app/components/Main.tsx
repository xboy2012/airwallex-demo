import styles from './Main.module.css';
import { useStore } from '../hooks/useStore';
import { useCallback } from 'react';
import { Button } from './Button';

export const Main = () => {
  const { setStage } = useStore();
  const onClick = useCallback(() => {
    setStage('form');
  }, [setStage]);

  return (
    <main className={styles.main}>
      <h2>A better way to enjoy everyday.</h2>
      <h3>Be the first to know when we launch.</h3>
      <Button onClick={onClick} text="Request an invite" />
    </main>
  );
};
