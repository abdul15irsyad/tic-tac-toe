'use client';

import { ITile, useTiles } from '@/hooks/use-tiles.hook';
import styles from './tile.module.css';
import { CloseOutlined, RadioButtonUnchecked } from '@mui/icons-material';

export const Tile = ({ tile }: { tile: ITile }) => {
  const { tiles, turn, setTiles, changeTurn } = useTiles();

  return (
    <div
      className={`${styles.tile} ${tile.mark ? styles.marked : styles.unmarked}`}
      onClick={() => {
        if (!tile.mark) {
          setTiles(
            tiles?.map((item) => {
              return item.coordinate.x === tile.coordinate.x &&
                item.coordinate.y === tile.coordinate.y
                ? { ...item, mark: turn }
                : item;
            }),
          );
          changeTurn();
        }
      }}
    >
      {tile.mark === 'x' ? (
        <CloseOutlined style={{ fontSize: '4rem' }} />
      ) : tile.mark === 'o' ? (
        <RadioButtonUnchecked style={{ fontSize: '4rem' }} />
      ) : null}
    </div>
  );
};
