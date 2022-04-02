import styles from './Input.module.css';
import { useCallback } from 'react';

interface IProps {
  value: string;
  placeholder: string;
  error: boolean;
  readOnly?: boolean;
  onChange: (value: string) => void;
}

export const Input = (props: IProps) => {
  const { value, placeholder, error, onChange } = props;
  const readOnly = !!props.readOnly;
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );
  return (
    <div className={`${styles.wrap} ${error ? styles.error : ''}`}>
      <input
        type="text"
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onInput={handleChange}
        readOnly={readOnly}
      />
    </div>
  );
};
