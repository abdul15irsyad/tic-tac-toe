'use client';

import { ITile, useTileStore } from '@/store/use-tiles.store';
import styles from './tile.module.css';
import { CircleMark } from '../marks/circle.component';
import { TimesMark } from '../marks/times.component';
import { checkWinCondition } from '@/utils/check.util';
import { useMemo } from 'react';

export const Tile = ({ tile }: { tile: ITile }) => {
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

  const isWinningTiles = useMemo(
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

  return (
    <div
      className={`${styles.tile} ${tile.mark ? styles.marked : styles.unmarked} ${isWinningTiles !== undefined ? (isWinningTiles ? styles['winning-tile'] : styles['not-winning-tile']) : ''}`}
      onClick={
        winner
          ? undefined
          : () => {
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
            }
      }
    >
      {tile.mark === 'x' ? (
        <TimesMark style={{ fontSize: '3.5rem' }} />
      ) : tile.mark === 'o' ? (
        <CircleMark style={{ fontSize: '3.5rem' }} />
      ) : null}
    </div>
  );
};
