import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react';
import styles from './styles.module.scss'

export default function LogoDesc(props) {

  return (
    <div className={styles.logoDescWrapper}>
      <Image
          className={styles.img}
          alt={props.alt}
          src={props.src}>
      </Image>
      <h2 className={styles.desc}>{props.desc}</h2>
    </div>
  );
}