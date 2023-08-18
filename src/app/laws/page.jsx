import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'

import {
  Headline,
  HeadlineSm,
  SubHeading,
  Text,
  TextBold,
  SegmentButton,
  Card,
  CardSecond,
  Row,
  LogoDesc,
  Bullet,
  Value,
  ImgWrapper,
  ArrowBack,
  DocumentWrapper
} from '@/components/index'

import Images from '@/assets/index';

export const metadata = {
  title: 'Юридическая поддержка',
  description: 'Юридическая поддержка',

}

export default function Laws() {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainHeadline}>{metadata.title}</h1>

      <div className={styles.cards}>
        <div className={styles.cardRow}>
          <Card href=" expertises/property" >
            <Link className={styles.SubHeadingLink} href="/ expertises">Взыскание ущерба после ДТП</Link>
            <Text>от 20 000 ₽</Text>
          </Card>

          <Card href=" expertises/property" >
            <Link className={styles.SubHeadingLink} href="/ expertises">Взыскание ущерба после залива/пожара</Link>
            <Text>от 25 000 ₽</Text>
          </Card>

          <Card href=" expertises/property" >
            <Link className={styles.SubHeadingLink} href="/ expertises">Имущественные споры</Link>
            <Text>от 30 000 ₽</Text>
          </Card>

          <Card href=" expertises/property" >
            <Link className={styles.SubHeadingLink} href="/ expertises">Иные юридические вопросы</Link>
            <Text>от 40 000 ₽</Text>
          </Card>
        </div>
      </div>

    </main >
  )
}