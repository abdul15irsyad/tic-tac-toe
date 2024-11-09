import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './button.module.css';

export const Button = ({
  startIcon,
  text,
  ...props
}: {
  startIcon?: ReactNode;
  text?: string;
} & Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'children'
>) => {
  return (
    <button {...props} className={`${styles.button} ${props?.className}`}>
      {startIcon}
      {text && <span>{text}</span>}
    </button>
  );
};
