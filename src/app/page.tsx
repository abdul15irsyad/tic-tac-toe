'use client';

import { useEffect } from 'react';
import { Tiles } from '@/app/(components)/tiles.component';
import { useTileStore } from './(store)/use-tiles.store';
import { IconCircle, IconRefresh, IconX } from '@tabler/icons-react';
import { Box, Button, Container, Group, Title } from '@mantine/core';
import { TileMark } from './(components)/tile-mark';

export default () => {
  const { tiles, winner, notification, turn, clearTiles, setNotification } =
    useTileStore();

  useEffect(() => {
    setNotification(
      winner || tiles?.filter(({ mark }) => !mark)?.length !== 0 ? (
        <>
          <TileMark
            size='1.25rem'
            icon={(winner ?? turn) === 'x' ? IconX : IconCircle}
          />
          {winner ? 'win the game 🎉' : 'turn to play'}
        </>
      ) : (
        'game draw'
      ),
    );
  }, [tiles, turn, winner, setNotification]);
  return (
    <Container
      size='xs'
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        padding: '2rem 1rem 0',
        height: '100dvh',
      }}
    >
      <Title fw={800}>Tic Tac Toe</Title>
      <Box ta='center'>
        <Tiles />
        {notification && (
          <Group
            display='inline-flex'
            p='lg'
            gap='0.25rem'
            style={{ userSelect: 'none' }}
          >
            {notification}
          </Group>
        )}
      </Box>
      <Button
        leftSection={<IconRefresh size='1rem' />}
        onClick={() => clearTiles()}
        disabled={tiles?.filter(({ mark }) => mark)?.length === 0}
        radius='md'
        color='blue.7'
        bdrs='lg'
        fz='md'
        px='xl'
        py='md'
        h='auto'
      >
        Restart Board
      </Button>
    </Container>
  );
};
