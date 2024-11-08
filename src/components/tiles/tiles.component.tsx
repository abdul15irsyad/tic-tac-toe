'use client';

import { useTiles } from '@/hooks/use-tiles.hook';
import { Tile } from '../tile/tile.component';
import styles from './tiles.module.css';

export const Tiles = () => {
  const { tiles, size } = useTiles();

  return (
    <div
      className={styles.tiles}
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`,
        width: `${5 * (size + 1)}rem`,
        height: `${5 * (size + 1)}rem`,
      }}
    >
      {tiles?.map((tile, index) => <Tile key={index} tile={tile} />)}
    </div>
  );
};
