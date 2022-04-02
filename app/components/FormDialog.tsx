import { createPortal } from 'react-dom';
import { Mask } from './Mask';
import { useStore } from '../hooks/useStore';
import { useCallback, useState } from 'react';
import { isEmail } from '../utils/isEmail';
import styles from './FormDialog.module.css';
import { Input } from './Input';
import { Button } from './Button';
import { submit } from '../api/submit';

export const FormDialog = () => {
  const { setStage } = useStore();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');

  const [errorFullName, setErrorFullName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorEmail2, setErrorEmail2] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState('');

  const handleSubmit = useCallback(async () => {
    const isFullNameValid = fullName.length >= 3;
    const isEmailValid = !!email && isEmail(email);
    const isEmail2Valid = isEmailValid && email2 === email;

    const isValid = isFullNameValid && isEmailValid && isEmail2Valid;

    setErrorFullName(!isFullNameValid);
    setErrorEmail(!isEmailValid);
    setErrorEmail2(!isEmail2Valid);

    if (!isValid) {
      return;
    }

    setErrorSubmit('');
    setSubmitting(true);
    let isSuccess = false;
    try {
      await submit({ fullName, email });
      isSuccess = true;
    } catch (e) {
      console.log(e);
      setErrorSubmit(e.message);
    }
    setSubmitting(false);

    if (isSuccess) {
      setStage('success');
    }
  }, [fullName, email, email2, setStage]);

  const dialog = (
    <>
      <Mask />
      <div className={styles.box}>
        <h3>Request an invite</h3>
        <Input
          placeholder="Full name"
          value={fullName}
          onChange={setFullName}
          error={errorFullName}
          readOnly={submitting}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={setEmail}
          error={errorEmail}
          readOnly={submitting}
        />
        <Input
          placeholder="Confirm email"
          value={email2}
          onChange={setEmail2}
          error={errorEmail2}
          readOnly={submitting}
        />
        {submitting ? (
          <Button text="Sending, please wait..." className={styles.btn} disabled />
        ) : (
          <Button onClick={handleSubmit} text="Send" className={styles.btn} />
        )}
        {!!errorSubmit && <p className={styles.error}>{errorSubmit}</p>}
      </div>
    </>
  );
  return createPortal(dialog, document.body);
};
