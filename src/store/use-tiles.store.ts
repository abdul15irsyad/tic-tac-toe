import { ReactNode } from 'react';
import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

export type IMark = 'x' | 'o';

export interface ITile {
  coordinate: { x: number; y: number };
  mark?: IMark;
}

export interface ITiles {
  tiles?: ITile[];
  firstTurn: IMark;
  turn: IMark;
  size: number;
  notification?: ReactNode;
  winner?: IMark;
  winningTiles?: ITile[];
  changeTurn: () => void;
  setTiles: (tiles?: ITile[]) => void;
  clearTiles: () => void;
  setNotification: (notification: ReactNode) => void;
  setWinner: (winner: IMark) => void;
  setWinningTiles: (winningTiles: ITile[]) => void;
}

export const useTileStore = create<ITiles>(
  (
    persist as (
      config: StateCreator<ITiles>,
      options: PersistOptions<
        Pick<ITiles, 'tiles' | 'turn' | 'firstTurn' | 'winner'>
      >,
    ) => StateCreator<ITiles>
  )(
    (set) => {
      const firstTurn = 'x';
      const tilesDefaultValue: ITile[] = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          tilesDefaultValue.push({ coordinate: { x: i, y: j } });
        }
      }
      return {
        tiles: tilesDefaultValue,
        firstTurn,
        turn: firstTurn,
        size: 3,
        changeTurn: () =>
          set((state) => ({ turn: state.turn === 'x' ? 'o' : 'x' })),
        setTiles: (tiles) => set({ tiles }),
        clearTiles: () => {
          const newFirstTurn = (firstTurn: IMark) =>
            firstTurn === 'x' ? 'o' : 'x';
          set((state) => ({
            tiles: tilesDefaultValue,
            firstTurn: newFirstTurn(state.firstTurn),
            turn: newFirstTurn(state.firstTurn),
            winner: undefined,
            winningTiles: undefined,
          }));
        },
        setNotification: (notification) => set({ notification }),
        setWinner: (winner) => set({ winner }),
        setWinningTiles: (winningTiles) => set({ winningTiles }),
      };
    },
    {
      name: 'tiles',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        tiles: state.tiles,
        turn: state.turn,
        firstTurn: state.firstTurn,
        winner: state.winner,
      }),
    },
  ),
);
