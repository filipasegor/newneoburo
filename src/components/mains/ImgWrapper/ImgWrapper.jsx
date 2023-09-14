import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react';
import styles from './styles.module.scss'


import {
  Headline,
  HeadlineSm,
  SubHeading,
  Text
} from '@/components/index'

export default function ImgWrapper(props) {

  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.desc}>{props.headline}</h2>
      <Text style={{ width: "50%" }}>{props.text}</Text>
      <div className={styles.ImgWrapper}>{props.children} </div>   
    </div>
  );
}