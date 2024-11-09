'use client';

import { Button } from '@/components/button/button.component';
import { Tiles } from '@/components/tiles/tiles.component';
import { useTileStore } from '@/store/use-tiles.store';
import { Refresh } from '@mui/icons-material';
import styles from './page.module.css';
import { Notification } from '@/components/notification/notification.component';
import { useEffect } from 'react';
import { TimesMark } from '@/components/marks/times.component';
import { CircleMark } from '@/components/marks/circle.component';

export default () => {
  const { tiles, winner, notification, turn, clearTiles, setNotification } =
    useTileStore();

  useEffect(() => {
    if (winner) {
      setNotification(
        <>
          {winner === 'x' ? (
            <TimesMark style={{ fontSize: '18px' }} />
          ) : (
            <CircleMark style={{ fontSize: '18px' }} />
          )}
          <span>win the game 🎉</span>
        </>,
      );
    } else if (tiles?.filter(({ mark }) => !mark)?.length === 0) {
      setNotification(<span>game draw</span>);
    } else {
      setNotification(
        <>
          {turn === 'x' ? (
            <TimesMark style={{ fontSize: '18px' }} />
          ) : (
            <CircleMark style={{ fontSize: '18px' }} />
          )}
          <span>turn to play</span>
        </>,
      );
    }
  }, [tiles, turn, winner, setNotification]);
  return (
    <div className={styles.container}>
      <h1>Tic Tac Toe</h1>
      <div style={{ padding: '0.5rem', textAlign: 'center' }}>
        <Tiles />
        {notification && <Notification>{notification}</Notification>}
      </div>
      <Button
        text="Restart"
        startIcon={<Refresh />}
        onClick={() => clearTiles()}
        disabled={tiles?.filter(({ mark }) => mark)?.length === 0}
        style={{ fontWeight: 'bold' }}
      />
    </div>
  );
};
