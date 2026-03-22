'use client';

import { ITile, useTileStore } from '@/app/(store)/use-tiles.store';
import { checkWinCondition } from '@/app/(utils)/check.util';
import { useCallback, useMemo } from 'react';
import { Box } from '@mantine/core';
import { useHover, useMediaQuery } from '@mantine/hooks';
import { IconCircle, IconX } from '@tabler/icons-react';
import { TileMark } from './tile-mark';

export const Tile = ({ tile }: { tile: ITile }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const { hovered, ref: refHover } = useHover();

  const {
    tiles,
    turn,
    setTiles,
    changeTurn,
    winner,
    setWinner,
    winningTiles,
    setWinningTiles,
  } = useTileStore();

  const isWinningTile = useMemo(
    () =>
      winner && (winningTiles?.length ?? 0) > 0
        ? !!winningTiles?.find(
            ({ coordinate }) =>
              coordinate.x === tile.coordinate.x &&
              coordinate.y === tile.coordinate.y,
          )
        : undefined,
    [winner, winningTiles, tile.coordinate],
  );

  const handleClick = useCallback(() => {
    if (!tile.mark) {
      const newTiles = tiles?.map((item) => {
        return item.coordinate.x === tile.coordinate.x &&
          item.coordinate.y === tile.coordinate.y
          ? { ...item, mark: turn }
          : item;
      });
      setTiles(newTiles);
      const { winCondition, tiles: winningTiles } = checkWinCondition(
        newTiles!,
        turn,
      );
      if (winCondition) {
        setWinner(turn);
        setWinningTiles(winningTiles!);
      } else changeTurn();
    }
  }, [changeTurn, setTiles, setWinner, setWinningTiles, tile, tiles, turn]);

  return (
    <Box
      ref={refHover}
      display='flex'
      bdrs='lg'
      bg={tile.mark ? 'gray.0' : 'white'}
      style={{
        width: isMobile ? '25vw' : '5.5rem',
        cursor: tile.mark || winner ? 'default' : 'pointer',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      opacity={
        isWinningTile !== undefined ? (isWinningTile ? 1 : 0.25) : undefined
      }
      onClick={winner ? undefined : handleClick}
    >
      {(['x', 'o'].includes(tile.mark ?? '') || !winner) && (
        <TileMark
          size='3rem'
          icon={(tile.mark ?? turn) === 'x' ? IconX : IconCircle}
          display={
            !tile.mark && !winner
              ? hovered && !isMobile
                ? 'flex'
                : 'none'
              : undefined
          }
          opacity={!tile.mark && !winner ? 0.5 : undefined}
        />
      )}
    </Box>
  );
};
