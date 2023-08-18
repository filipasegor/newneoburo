import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react';
import styles from './styles.module.scss'

export default function Value({label, value}) {

  return (
    <div className={styles.Wrapper}>
      <p className={styles.Label}>{label}</p>
      <p className={styles.Value}>{value}</p>
    </div>
  );
}