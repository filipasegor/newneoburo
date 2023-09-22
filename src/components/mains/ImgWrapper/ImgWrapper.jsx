import Image from 'next/image'
import Link from 'next/link'
import { Children } from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';


import {
  Headline,
  HeadlineSm,
  HeadlineMd,
  SubHeading,
  Text
} from '@/components/index'

export default function ImgWrapper({children,className, headline, text}) {


  return (
    <div 
    className={clsx({
      [styles.Wrapper]: true,
      [styles.Outline]: className === 'Outline',
      [styles.Shadow]: className === 'Shadow',
    })}
    
    >
      <HeadlineMd style={{ marginBottom: "15px" }}>{headline}</HeadlineMd>
      <Text style={{ width: "70%" }}>{text}</Text>
      <div className={styles.ImgWrapper}>{children} </div>   
    </div>
  );
}