'use client';

import { useTileStore } from '@/store/use-tiles.store';
import { Tile } from '../tile/tile.component';
import styles from './tiles.module.css';

export const Tiles = () => {
  const { tiles, size } = useTileStore();

  return (
    <div
      className={styles.tiles}
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`,
      }}
    >
      {tiles?.map((tile, index) => <Tile key={index} tile={tile} />)}
    </div>
  );
};
