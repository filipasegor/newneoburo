import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';

export default function Table({label, firstValue, secondValue, last}) {

  return (
    <div 
    className={clsx({
      [styles.row]: true,
      [styles.last]: last === true
    })}
    >
      <p className={styles.labelCell}>{label}</p>
      <p className={styles.valueCell}>{firstValue}</p>
      <p className={styles.valueCell}>{secondValue}</p>
    </div>
  );
}