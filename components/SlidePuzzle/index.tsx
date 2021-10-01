import { CSSProperties } from 'react'

interface SlidePuzzleProps {
  imageURL: string;
  size?: number;
}

export const SlidePuzzle = ({ imageURL, size = 3 }: SlidePuzzleProps) => {
  return (
    <div
      style={{
        height: "80%",
        maxWidth: "90%",
      }}
    >
      {Array.from(Array(size).keys()).map((i) => (
        <div className="row">
          {Array.from(Array(size).keys()).map((_, j) => {
            return <img src={imageURL} style={getPieceStyle(i, j, size)} />;
          })}
        </div>
      ))}
    </div>
  );
};

const getPieceStyle = (i: number, j: number, n: number): CSSProperties => {
  const marginPercentage = 0.2;
  return {
    clipPath: `inset(${(i * 100) / n + marginPercentage}% ${
      (j * 100) / n + marginPercentage
    }% ${((n - 1 - i) * 100) / n + marginPercentage}% ${
      ((n - 1 - j) * 100) / n + marginPercentage
    }%)`,
    position: "absolute",
    margin: "5px",
    width: "100%",
  };
};
