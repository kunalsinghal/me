import React from 'react'

import { defaultGrid, selectTileInGrid } from './grid'
import { Pieces } from './Pieces'
import { Grid } from './types'

interface SlidePuzzleProps {
  imageURL: string;
  size?: number;
}

export const SlidePuzzle = ({ imageURL, size = 3 }: SlidePuzzleProps) => {
  const [grid, setGrid] = React.useState<Grid>(defaultGrid(size));

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
