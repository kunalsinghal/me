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

  const [hint, setHint] = React.useState(false);

  return (
    <div>
      <Pieces
        grid={grid}
        imageURL={imageURL}
        onTileClick={selectTileInGrid(grid, setGrid)}
        hint={hint}
      />
      <div
        style={{
          marginTop: "12px",
          display: "flex",
          fontSize: "1.2em",
          alignItems: "center",
        }}
        onClick={() => setHint(!hint)}
      >
        <input
          type="checkbox"
          style={{
            margin: "0 8px",
          }}
          checked={hint}
        />
        <div>Show hints</div>
      </div>
    </div>
  );
};
