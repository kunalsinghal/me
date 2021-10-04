import { Button } from 'components/Button'
import { SlidePuzzle } from 'components/SlidePuzzle'
import React from 'react'

import styles from './birthday-puzzles.module.css'

export const BirthdayPuzzles = () => {
  const [stage, setStage] = React.useState(0);

  if (stage === 0) {
    return <IntroPage setState={setStage} />;
  }

  return <PuzzlePage stage={stage} setStage={setStage} key={stage} />;
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

const PuzzlePage: React.FC<{ stage: number; setStage(x: number): void }> = ({
  stage,
  setStage,
}) => {
  const [canSkip, setCanSkip] = React.useState(false);

  React.useEffect(() => {
    const completed = JSON.parse(
      localStorage.getItem("puzzle_completed") ?? "0",
    );

    if (completed >= stage && !canSkip) {
      setCanSkip(true);
    }
  }, []);

  const onSolve = () => {
    localStorage.setItem("puzzle_completed", JSON.stringify(stage));
    setStage(stage + 1);
  };

  switch (stage) {
    case 1:
      return (
        <div className={styles.puzzleContainer}>
          <div className={styles.description}>
            Wait you got to scratch your head a bit first!
            <br />
            <br />
            This moment lasted only a second and yet we have it forever...
          </div>
          <SlidePuzzle
            imageURL="puzzle1.jpg"
            size={2}
            onSolve={onSolve}
            key={stage}
            canSkip={canSkip}
          />
        </div>
      );
    case 2:
      return (
        <div className={styles.puzzleContainer}>
          <div className={styles.description}>
            You were so ready to get married then!
          </div>
          <SlidePuzzle
            imageURL="puzzle2.jpg"
            onSolve={onSolve}
            key={stage}
            canSkip={canSkip}
          />
        </div>
      );
  }
};
