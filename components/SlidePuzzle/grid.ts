import { Grid, Position, Tile } from './types'

export const defaultGrid = (size: number): Grid =>
  Array.from(Array(size).keys()).map((top) =>
    Array.from(Array(size).keys()).map((left) => ({
      top,
      left,
      visible: top + left + 2 !== size * 2,
    })),
  );

export const flippedGrid = (grid: Grid) => {
  const size = grid.length;
  const flipped = defaultGrid(size);
  grid.forEach((row, y) =>
    row.forEach((tile, x) => {
      flipped[tile.top][tile.left] = {
        top: y,
        left: x,
        visible: tile.visible,
      };
    }),
  );
  return flipped;
};

export const selectTileInGrid =
  (grid: Grid, setGrid: (_: Grid) => void) => (x: number, y: number) => {
    const pos = { x, y };
    console.log(pos, grid);
    setGrid(
      fillSpot(pos, { x: x - 1, y }, grid) ??
        fillSpot(pos, { x: x + 1, y }, grid) ??
        fillSpot(pos, { x, y: y - 1 }, grid) ??
        fillSpot(pos, { x, y: y + 1 }, grid) ??
        grid,
    );
  };

const fillSpot = (pos: Position, spot: Position, grid: Grid) => {
  const posTile = grid[pos.y][pos.x];
  const spotTile = grid[spot.y]?.[spot.x];

  if (spotTile === undefined || spotTile.visible) return undefined;

  return grid.map((row, j) =>
    row.map((tile, i) => {
      if (i === pos.x && j === pos.y) {
        return spotTile;
      } else if (i === spot.x && j === spot.y) {
        return posTile;
      } else {
        return tile;
      }
    }),
  );
};
