import { ReactNode } from 'react';
import styles from './notification.module.css';

export const Notification = ({ children }: { children: ReactNode }) => {
  return <div className={styles.notification}>{children}</div>;
};
