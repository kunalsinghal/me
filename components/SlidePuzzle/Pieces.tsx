import React from 'react'

import { flippedGrid } from './grid'
import styles from './pieces.module.css'
import { Grid, Tile } from './types'

interface PiecesProps {
  imageURL: string;
  grid: Grid;
  onTileClick(x: number, y: number): void;
  hint: boolean;
}

export const Pieces = ({ imageURL, grid, onTileClick, hint }: PiecesProps) => {
  const size = grid.length;

  const flipped = flippedGrid(grid);

  return (
    <>
      {flipped.map((row, top) => (
        <div
          key={top}
          style={{
            display: "flex",
            margin: 0,
            width: "100%",
          }}
        >
          {row.map((tile, left) => (
            <Piece
              imageURL={imageURL}
              key={left}
              x={tile.left}
              y={tile.top}
              tile={{ top, left, visible: tile.visible }}
              size={size}
              onClick={() => onTileClick(tile.left, tile.top)}
              hint={hint}
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
  onClick(): void;
  hint: boolean;
}

const Piece = ({
  imageURL,
  x,
  y,
  size,
  tile: { left, top, visible },
  onClick,
  hint,
}: PieceProps) => {
  const factor = 100 / size;

  return (
    <div
      style={{
        display: "inline-block",
        padding: "4px 5px",
        transform: `translate(${(x - left) * 100}%, ${(y - top) * 100}%)`,
        transition: "transform 0.3s",
      }}
      className={visible ? styles.piece : undefined}
      onClick={onClick}
    >
      {hint && visible && (
        <div className={styles.hint}>{top * size + left + 1}</div>
      )}
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
