import Image from 'next/image'
import Link from 'next/link'
import longArrow from './longArrow.svg'

import styles from './styles.module.scss'

export default function ArrowBack(props) {

  return (
    <div className={styles.longArrowWrapper}>
      <Link href="/" className={styles.longArrow}>
      <Image 
        className={styles.longArrowImg}
        alt="longArrow"
        src={longArrow}>
      </Image>
        Все направления
    </Link>  
    </div>
  );
}