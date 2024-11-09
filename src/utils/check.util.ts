import { IMark, ITile } from '@/store/use-tiles.store';

export const checkWinCondition = (
  tiles: ITile[],
  mark: IMark,
): { winCondition: boolean; tiles?: ITile[] } => {
  // Check rows for a win
  for (let row = 0; row < 3; row++) {
    if (
      findCoordinate(tiles, row, 0)?.mark === mark &&
      findCoordinate(tiles, row, 1)?.mark === mark &&
      findCoordinate(tiles, row, 2)?.mark === mark
    ) {
      return {
        winCondition: true,
        tiles: [
          findCoordinate(tiles, row, 0)!,
          findCoordinate(tiles, row, 1)!,
          findCoordinate(tiles, row, 2)!,
        ],
      };
    }
  }

  // Check columns for a win
  for (let col = 0; col < 3; col++) {
    if (
      findCoordinate(tiles, 0, col)?.mark === mark &&
      findCoordinate(tiles, 1, col)?.mark === mark &&
      findCoordinate(tiles, 2, col)?.mark === mark
    ) {
      return {
        winCondition: true,
        tiles: [
          findCoordinate(tiles, 0, col)!,
          findCoordinate(tiles, 1, col)!,
          findCoordinate(tiles, 2, col)!,
        ],
      };
    }
  }

  // Check main diagonal (top-left to bottom-right)
  const mainDiagonal =
    findCoordinate(tiles, 0, 0)?.mark === mark &&
    findCoordinate(tiles, 1, 1)?.mark === mark &&
    findCoordinate(tiles, 2, 2)?.mark === mark;
  if (mainDiagonal)
    return {
      winCondition: true,
      tiles: [
        findCoordinate(tiles, 0, 0)!,
        findCoordinate(tiles, 1, 1)!,
        findCoordinate(tiles, 2, 2)!,
      ],
    };

  // Check anti-diagonal (top-right to bottom-left)
  const antiDiagonal =
    findCoordinate(tiles, 0, 2)?.mark === mark &&
    findCoordinate(tiles, 1, 1)?.mark === mark &&
    findCoordinate(tiles, 2, 0)?.mark === mark;
  if (antiDiagonal)
    return {
      winCondition: true,
      tiles: [
        findCoordinate(tiles, 0, 2)!,
        findCoordinate(tiles, 1, 1)!,
        findCoordinate(tiles, 2, 0)!,
      ],
    };

  return {
    winCondition: false,
    tiles: [],
  };
};

const findCoordinate = (tiles: ITile[], x: number, y: number) => {
  return tiles.find(
    ({ coordinate }) => coordinate.x === x && coordinate.y === y,
  );
};
