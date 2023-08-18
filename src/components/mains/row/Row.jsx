import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react';
import styles from './styles.module.scss'

export default function Row({label, value}) {

  return (
    <div className={styles.rowWrapper}>
      <p className={styles.rowLabel}>{label}</p>
      <p className={styles.rowValue}>{value}</p>
    </div>
  );
}