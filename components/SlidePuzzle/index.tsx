import { Button } from 'components/Button'
import React from 'react'

import { defaultGrid, isSolved, randomizeGrid, selectTileInGrid } from './grid'
import { Pieces } from './Pieces'
import { Grid } from './types'

interface SlidePuzzleProps {
  imageURL: string;
  size?: number;
  onSolve(): void;
  canSkip: boolean;
}

export const SlidePuzzle = ({
  imageURL,
  size = 3,
  onSolve,
  canSkip,
}: SlidePuzzleProps) => {
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
    <div style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          opacity: solved ? 1 : 0,
          // display: solved ? "block" : "none",
          transition: "opacity 2s",
          position: "absolute",
          width: "100%",
          top: 0,
          zIndex: 0,
        }}
      >
        <img src={imageURL} style={{ width: "100%" }} />
        {solved && (
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              fontSize: "1.2em",
              alignItems: "center",
              top: 0,
            }}
          >
            <Button onClick={onSolve}>Next</Button>
          </div>
        )}
      </div>
      <div
        style={{
          opacity: solved ? 0 : 1,
          transition: "opacity 2s",
          zIndex: 1,
        }}
      >
        <Pieces
          grid={grid}
          imageURL={imageURL}
          onTileClick={selectTileInGrid(grid, setGrid)}
          hint={hint}
        />
        {!solved && (
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
        )}
        {canSkip && !solved && (
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              fontSize: "1.2em",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: "12px" }}>Solved Already!</div>
            <Button onClick={() => setSolved(true)}>Skip</Button>
          </div>
        )}
      </div>
    </div>
  );
};
