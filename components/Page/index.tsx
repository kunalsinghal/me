import styles from './page.module.css'

export const Page: React.FC = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};
