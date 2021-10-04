import styles from './button.module.css'

interface ButtonProps {
  onClick?(): void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={styles.button}>
      {children}
    </div>
  );
};
