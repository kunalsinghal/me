import { Page } from 'components/Page'
import { SlidePuzzle } from 'components/SlidePuzzle'

import styles from './happy-birthday.module.css'

export default function HappyBirthday() {
  return (
    <div className={styles.container}>
      <div className={styles.game}>
        <SlidePuzzle imageURL="/puzzle1.jpg" size={3} />
      </div>
    </div>
  );
}
