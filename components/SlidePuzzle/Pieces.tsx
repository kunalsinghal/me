import { CSSProperties } from 'react'

import { Grid, Tile } from './types'

interface PiecesProps {
  imageURL: string;
  grid: Grid;
}

export const Pieces = ({ imageURL, grid }: PiecesProps) => {
  const size = grid.length;

  return (
    <>
      {grid.map((row, y) => (
        <div className="row" key={y}>
          {row.map((tile, x) => (
            <Piece
              imageURL={imageURL}
              key={x}
              x={x}
              y={y}
              tile={tile}
              size={size}
            />
          ))}
        </div>
      ))}
    </>
  );
};

interface PieceProps {
  x: number;
  y: number;
  size: number;
  tile: Tile;
  imageURL: string;
}

const Piece = ({
  imageURL,
  x,
  y,
  size,
  tile: { left, top, visible },
}: PieceProps) => {
  const marginPercentage = 0.2;
  const factor = 100 / size;

  return (
    <img
      src={imageURL}
      style={{
        clipPath: `inset(${top * factor + marginPercentage}% ${
          (size - 1 - left) * factor + marginPercentage
        }% ${(size - 1 - top) * factor + marginPercentage}% ${
          left * factor + marginPercentage
        }%)`,
        transform: `translate(${(x - left) * factor}%, ${(y - top) * factor}%)`,
        position: "absolute",
        margin: "5px",
        width: "100%",
        display: visible ? undefined : "none",
      }}
      key={x}
      data-x={x}
      data-y={y}
      data-tile={`${left}:${top}`}
    />
  );
};
