import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react';
import styles from './styles.module.scss'

export default function DocumentWrapper(props) {

  return (
    <div className={styles.Wrapper}>
      <Image
          className={styles.img}
          alt={props.alt}
          src={props.src}>
      </Image>
      <p className={styles.desc}>{props.desc}</p>
    </div>
  );
}