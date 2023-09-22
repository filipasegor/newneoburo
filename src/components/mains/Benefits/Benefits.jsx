import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react';
import styles from './styles.module.scss'

import {
  HeadlineSm,
  Text,
} from '@/components/index';

export default function Benefits({firstSrc, firstHeadline, firstText, secondSrc, secondHeadline, secondText, thirdSrc, thirdHeadline, thirdText, fourthSrc, fourthHeadline, fourthText}) {

  return (
    <div className={styles.Wrapper}>
      <div className={styles.rowWrapper}>

        <div className={styles.itemWrapper}>
          <Image
            className={styles.icon}
            alt="icon"
            src={firstSrc}>
          </Image>
          <HeadlineSm>{firstHeadline}</HeadlineSm>
          <Text>{firstText}</Text>
        </div>

        <div className={styles.itemWrapper}>
          <Image
            className={styles.icon}
            alt="icon"
            src={secondSrc}>
          </Image>
          <HeadlineSm>{secondHeadline}</HeadlineSm>
          <Text>{secondText}</Text>
        </div>
      </div>

      <div className={styles.rowWrapper}>
        <div className={styles.itemWrapper}>
          <Image
            className={styles.icon}
            alt="icon"
            src={thirdSrc}>
          </Image>
          <HeadlineSm>{thirdHeadline}</HeadlineSm>
          <Text>{thirdText}</Text>
        </div>
        
        <div className={styles.itemWrapper}>
          <Image
            className={styles.icon}
            alt="icon"
            src={fourthSrc}>
          </Image>
          <HeadlineSm>{fourthHeadline}</HeadlineSm>
          <Text>{fourthText}</Text>
        </div>
      </div>
    </div>
  );
}