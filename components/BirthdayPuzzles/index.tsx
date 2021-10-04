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
    if (!canSkip)
      localStorage.setItem("puzzle_completed", JSON.stringify(stage));
    setStage(stage + 1);
    window.scrollTo(0, 0);
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
            imageURL="dance_dip.jpg"
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
          <div className={styles.description}>Some tough love!</div>
          <SlidePuzzle
            imageURL="thappad.jpg"
            size={3}
            onSolve={onSolve}
            key={stage}
            canSkip={canSkip}
          />
        </div>
      );
    case 3:
      return (
        <div className={styles.puzzleContainer}>
          <div className={styles.description}>
            You were so ready to get married then!
          </div>
          <SlidePuzzle
            imageURL="bhaagi_mahima.jpg"
            onSolve={onSolve}
            key={stage}
            canSkip={canSkip}
            size={3}
          />
        </div>
      );
    case 4:
      return (
        <div className={styles.puzzleContainer}>
          <div className={styles.description}>And then we saw Buddha!</div>
          <SlidePuzzle
            imageURL="buddha.jpg"
            onSolve={onSolve}
            key={stage}
            canSkip={canSkip}
            size={4}
          />
        </div>
      );

    default:
      return (
        <div className={styles.puzzleContainer}>
          <div className={styles.description}>
            A very happy birthday my dearest. Jaldi se milte hai! Miss you
            loads.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {[
              "dance_dip.jpg",
              "thappad.jpg",
              "bhaagi_mahima.jpg",
              "buddha.jpg",
            ].map((url) => (
              <img
                src={url}
                style={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
            ))}
          </div>
        </div>
      );
  }
};
