import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react';
import styles from './styles.module.scss'

export default function ImgWrapper(props) {

  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.desc}>{props.desc}</h2>
      <div className={styles.ImgWrapper}>{props.children} </div>   
    </div>
  );
}