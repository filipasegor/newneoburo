import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react';
import styles from './styles.module.scss'

import {
  HeadlineSm,
  Text,
} from '@/components/index'

export default function Stepper({headline, text, src, lineHeight}) {

  return (
    <div className={styles.Wrapper}>
      <div className={styles.textWrapper}>
        <HeadlineSm style={{marginBottom:"10px"}}>{headline}</HeadlineSm>
        <Text>{text}</Text>
      </div>
      <div className={styles.step}>
        <Image
          className={styles.icon}
          alt="icon"
          src={src}>
        </Image>
        <div className={styles.line} style={lineHeight}></div>
      </div>
    </div>
  );
}