import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react';
import styles from './styles.module.scss'
import arrow from '../../../../public/arrow.svg'

export default function CardSecond({children}) {

  

  return (
    <div className={styles.cardSecondWrapper}>
      {children}
    </div>
  );
}