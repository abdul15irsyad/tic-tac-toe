'use client';

import { ITile, useTileStore } from '@/app/(store)/use-tiles.store';
import styles from './tile.module.css';
import { CircleMark } from '../marks/circle.component';
import { XMark } from '../marks/times.component';
import { checkWinCondition } from '@/app/(utils)/check.util';
import { useCallback, useMemo } from 'react';

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
    <div
      className={`${styles.tile} ${tile.mark ? styles.marked : styles.unmarked} ${isWinningTiles !== undefined ? (isWinningTiles ? styles['winning-tile'] : styles['not-winning-tile']) : ''}`}
      onClick={winner ? undefined : handleClick}
    >
      {tile.mark === 'x' ? (
        <XMark size='3rem' />
      ) : tile.mark === 'o' ? (
        <CircleMark size='3rem' />
      ) : (
        !winner && (
          <div className={styles['hover-mark']}>
            {turn === 'x' ? <XMark size='3rem' /> : <CircleMark size='3rem' />}
          </div>
        )
      )}
    </div>
  );
};
