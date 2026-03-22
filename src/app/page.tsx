'use client';

import { Notification } from '@/app/(components)/notification/notification.component';
import { useEffect } from 'react';
import { CircleMark } from '@/app/(components)/marks/circle.component';
import { XMark } from '@/app/(components)/marks/times.component';
import { Tiles } from '@/app/(components)/tiles/tiles.component';
import { useTileStore } from './(store)/use-tiles.store';
import { IconRefresh } from '@tabler/icons-react';
import { Box, Button, Container, Title } from '@mantine/core';

export default () => {
  const { tiles, winner, notification, turn, clearTiles, setNotification } =
    useTileStore();

  useEffect(() => {
    if (winner) {
      setNotification(
        <>
          {winner === 'x' ? <XMark size='1rem' /> : <CircleMark size='1rem' />}
          <span>win the game 🎉</span>
        </>,
      );
    } else if (tiles?.filter(({ mark }) => !mark)?.length === 0) {
      setNotification(<span>game draw</span>);
    } else {
      setNotification(
        <>
          {turn === 'x' ? <XMark size='1rem' /> : <CircleMark size='1rem' />}
          <span>turn to play</span>
        </>,
      );
    }
  }, [tiles, turn, winner, setNotification]);
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        padding: '2rem 1rem 0',
      }}
    >
      <Title fw={900}>Tic Tac Toe</Title>
      <Box ta='center' p='md'>
        <Tiles />
        {notification && <Notification>{notification}</Notification>}
      </Box>
      <Button
        leftSection={<IconRefresh size='1rem' />}
        onClick={() => clearTiles()}
        disabled={tiles?.filter(({ mark }) => mark)?.length === 0}
        radius='md'
      >
        Restart
      </Button>
    </Container>
  );
};
