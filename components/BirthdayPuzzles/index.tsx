import { Button } from 'components/Button'
import { SlidePuzzle } from 'components/SlidePuzzle'
import React from 'react'

import styles from './birthday-puzzles.module.css'

export const BirthdayPuzzles = () => {
  const [stage, setStage] = React.useState(0);

  if (stage === 0) {
    return <IntroPage setState={setStage} />;
  }

  return <PuzzlePage stage={1} />;
};

const IntroPage = (props: { setState(x: number): void }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "200px",
      }}
    >
      <div>
        Welcome Mrs. Singhal. Let's take some time to refresh some memories of
        2021.
      </div>
      <Button onClick={() => props.setState(1)}>Let's go! 👉</Button>
    </div>
  );
};

const PuzzlePage: React.FC<{ stage: number }> = () => {
  return (
    <div className={styles.puzzleContainer}>
      <div className={styles.description}>
        Wait you got to scratch your head a bit first!
        <br />
        <br />
        This moment lasted only a second and yet we have it forever...
      </div>
      <SlidePuzzle imageURL="puzzle1.jpg" />
    </div>
  );
};
