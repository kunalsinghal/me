import { BirthdayPuzzles } from 'components/BirthdayPuzzles'
import { Page } from 'components/Page'

import styles from './happy-birthday.module.css'

export default function HappyBirthday() {
  return (
    <div className={styles.container}>
      <div className={styles.game}>
        <BirthdayPuzzles />
      </div>
    </div>
  );
}
