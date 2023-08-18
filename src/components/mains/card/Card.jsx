import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react';
import styles from './styles.module.scss'
import arrow from '../../../../public/arrow.svg'

export default function Card({href, linkText, children, style}) {

  return (
    <div className={styles.cardWrapper} style={style}>
      {children}
      <div className={styles.linkWrapper}>
        <Link href={href} className={styles.link}>
          {linkText}
          <Image 
            className={styles.arrow}
            alt="arrow"
            src={arrow}>
          </Image>
        </Link>
      </div>
    </div>
  );
}