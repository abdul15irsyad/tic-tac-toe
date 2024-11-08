import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

export interface ITile {
  coordinate: { x: number; y: number };
  mark?: 'x' | 'o';
}

export interface ITiles {
  tiles?: ITile[];
  turn: 'x' | 'o';
  size: number;
  changeTurn: () => void;
  setTiles: (tiles?: ITile[]) => void;
}

export const useTiles = create<ITiles>(
  (
    persist as (
      config: StateCreator<ITiles>,
      options: PersistOptions<Pick<ITiles, 'tiles' | 'turn'>>,
    ) => StateCreator<ITiles>
  )(
    (set) => {
      const tilesDefaultValue = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          tilesDefaultValue.push({ coordinate: { x: i, y: j } });
        }
      }
      return {
        tiles: tilesDefaultValue,
        turn: 'x',
        size: 3,
        changeTurn: () =>
          set((state) => ({ turn: state.turn === 'x' ? 'o' : 'x' })),
        setTiles: (tiles) => set({ tiles }),
      };
    },
    {
      name: 'tiles',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ tiles: state.tiles, turn: state.turn }),
    },
  ),
);
