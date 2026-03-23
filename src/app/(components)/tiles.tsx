'use client';

import { useTileStore } from '@/app/(store)/use-tiles.store';
import { Tile } from './tile';
import { SimpleGrid } from '@mantine/core';

export const Tiles = () => {
  const { tiles, size } = useTileStore();

  return (
    <SimpleGrid
      style={{
        gap: '0.5rem',
        aspectRatio: '1/1',
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`,
      }}
      w='100%'
      mb='lg'
      p='sm'
      bdrs='lg'
      bg='gray.3'
    >
      {tiles?.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </SimpleGrid>
  );
};
