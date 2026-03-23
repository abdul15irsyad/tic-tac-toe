'use client';

import { useEffect } from 'react';
import { Tiles } from '@/app/(components)/tiles';
import {
  IconCircle,
  IconCirclePlus,
  IconRefresh,
  IconX,
} from '@tabler/icons-react';
import { Box, Button, Container, Group, Stack } from '@mantine/core';
import { useTileStore } from '../(store)/use-tiles.store';
import { TileMark } from '../(components)/tile-mark';

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
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <Group>
        <Stack align='center'>
          <Box w='300px'>
            <Tiles />
          </Box>
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
          <Group>
            <Button
              leftSection={<IconCirclePlus size='1.25rem' />}
              bdrs='lg'
              px='lg'
              py='md'
              h='auto'
            >
              New Game
            </Button>
            <Button
              variant='outline'
              leftSection={<IconRefresh size='1.25rem' stroke={3} />}
              onClick={() => clearTiles()}
              disabled={tiles?.filter(({ mark }) => mark)?.length === 0}
              bdrs='lg'
              px='lg'
              py='md'
              h='auto'
            >
              Restart Board
            </Button>
          </Group>
        </Stack>
      </Group>
    </Container>
  );
};
