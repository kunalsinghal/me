import styles from './pieces.module.css'
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
        <div
          key={y}
          style={{
            display: "flex",
            margin: 0,
          }}
        >
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
  const factor = 100 / size;

  return (
    <div
      style={{
        display: "inline-block",
        margin: "4px 5px",
      }}
      className={visible ? styles.piece : undefined}
    >
      <img
        src={imageURL}
        style={{
          clipPath: `inset(${top * factor}% ${(size - 1 - left) * factor}% ${
            (size - 1 - top) * factor
          }% ${left * factor}%)`,
          transformOrigin: "top left",
          transform: `scale(${size}) translate(${-left * factor}%, ${
            -top * factor
          }%)`,
          width: "100%",
          opacity: visible ? 1 : 0,
        }}
        key={x}
        data-x={x}
        data-y={y}
        data-tile={`${left}:${top}`}
      />
    </div>
  );
};