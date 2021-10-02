export type Grid = Tile[][];

export interface Tile {
  left: number;
  top: number;
  visible: boolean;
}

export interface Position {
  x: number;
  y: number;
}
