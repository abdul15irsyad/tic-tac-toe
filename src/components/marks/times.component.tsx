import { CloseOutlined } from '@mui/icons-material';
import styles from './marks.module.css';
import { CSSProperties } from 'react';

export const TimesMark = ({ style }: { style?: CSSProperties }) => (
  <CloseOutlined className={`${styles.mark} ${styles.times}`} style={style} />
);
