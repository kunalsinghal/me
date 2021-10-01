import { Pieces } from './Pieces'
import { Grid } from './types'

interface SlidePuzzleProps {
  imageURL: string;
  size?: number;
}

export const SlidePuzzle = ({ imageURL, size = 3 }: SlidePuzzleProps) => {
  const grid: Grid = Array.from(Array(size).keys()).map((top) =>
    Array.from(Array(size).keys()).map((left) => ({
      top,
      left,
      visible: top + left + 2 !== size * 2,
    })),
  );

  return (
    <div
      style={{
        height: "80%",
        maxWidth: "90%",
      }}
    >
      <Pieces grid={grid} imageURL={imageURL} />
    </div>
  );
};
