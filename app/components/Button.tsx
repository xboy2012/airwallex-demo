import styles from './Button.module.css';

interface IProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button = (props: IProps) => {
  const { text, onClick, disabled } = props;
  const className = props.className || '';
  return (
    <div className={`${styles.wrap} ${disabled ? styles.disabled : ''} ${className}`}>
      <button className={styles.btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
