import { RadioButtonUnchecked } from '@mui/icons-material';
import styles from './marks.module.css';
import { CSSProperties } from 'react';

export const CircleMark = ({ style }: { style?: CSSProperties }) => (
  <RadioButtonUnchecked
    className={`${styles.mark} ${styles.circle}`}
    style={style}
  />
);
