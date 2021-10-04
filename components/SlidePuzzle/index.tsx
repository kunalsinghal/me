import React from 'react'

import { defaultGrid, isSolved, randomizeGrid, selectTileInGrid } from './grid'
import { Pieces } from './Pieces'
import { Grid } from './types'

interface SlidePuzzleProps {
  imageURL: string;
  size?: number;
}

export const SlidePuzzle = ({ imageURL, size = 3 }: SlidePuzzleProps) => {
  const [grid, setGrid] = React.useState<Grid>(defaultGrid(size));
  const [solved, setSolved] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    setGrid(randomizeGrid(grid));
  }, []);

  React.useEffect(() => {
    const newSolved = isSolved(grid);
    if (!newSolved) setSolved(false);
    else if (solved === false) setSolved(true);
  }, [grid]);

  React.useEffect(() => {
    console.log(solved);
  }, [solved]);

  return (
    <Pieces
      grid={grid}
      imageURL={imageURL}
      onTileClick={selectTileInGrid(grid, setGrid)}
    />
  );
};
