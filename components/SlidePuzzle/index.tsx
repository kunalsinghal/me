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

  React.useEffect(() => {
    setGrid(randomizeGrid(grid));
  }, []);

  React.useEffect(() => {
    console.log("isSolved", isSolved(grid));
  }, [grid]);

  return (
    <div
      style={{
        height: "80%",
        maxWidth: "90%",
      }}
    >
      <Pieces
        grid={grid}
        imageURL={imageURL}
        onTileClick={selectTileInGrid(grid, setGrid)}
      />
    </div>
  );
};
