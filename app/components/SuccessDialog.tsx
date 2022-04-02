import { createPortal } from 'react-dom';
import { Mask } from './Mask';
import { useStore } from '../hooks/useStore';
import { useCallback } from 'react';
import styles from './SuccessDialog.module.css';
import { Button } from './Button';

export const SuccessDialog = () => {
  const { setStage } = useStore();
  const handleClick = useCallback(() => {
    setStage('home');
  }, [setStage]);
  const dialog = (
    <>
      <Mask />
      <div className={styles.box}>
        <h3>All done!</h3>
        <p>You will be one of the first to experience Broccoli & Co. when we launch.</p>
        <Button onClick={handleClick} text="OK" />
      </div>
    </>
  );
  return createPortal(dialog, document.body);
};
