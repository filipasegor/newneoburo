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
  title: 'Оценка всех видов имущества',
  description: 'Оценка всех видов имущества',
}

export default function Assessments() {
  return (
    <main className={styles.main}>
      
      <h1 className={styles.mainHeadline}>{metadata.title}</h1>
      

      <div className={styles.cards}>
        <div className={styles.cardRow}>
          <Card href="assessments/property" >

            <Link className={styles.SubHeadingLink} href="/assessments/property">Оценка недвижимого имущества</Link>

            <Link className={styles.pageLink} href="/assessments">Квартира</Link>
            <Link className={styles.pageLink} href="/assessments">Комната</Link>
            <Link className={styles.pageLink} href="/assessments">Загородная недвижимость</Link>
            <Link className={styles.pageLink} href="/assessments">Земельный участок</Link>
            <Link className={styles.pageLink} href="/assessments">Гараж</Link>
            <Link className={styles.pageLink} href="/assessments">Жилой дом</Link>
            <Link className={styles.pageLink} href="/assessments">Парковочное место</Link >
          </Card>

          <Card href="assessments/property" >

            <Link className={styles.SubHeadingLink} href="/assessments">Оценка коммерческой недвижимости</Link>

            <Link className={styles.pageLink} href="/assessments">Здания</Link>
            <Link className={styles.pageLink} href="/assessments">Нежилые помещения</Link>
            <Link className={styles.pageLink} href="/assessments/commercialProperty/offices">Офисные помещения</Link>
            <Link className={styles.pageLink} href="/assessments">Складская недвижимость</Link>
            <Link className={styles.pageLink} href="/assessments">Имущественные комплексы</Link>
            <Link className={styles.pageLink} href="/assessments">Незавершенное строительство</Link>
            <Link className={styles.pageLink} href="/assessments">Арендная ставка</Link >
          </Card>

          <Card href="assessments/property" >

            <Link className={styles.SubHeadingLink} href="/assessments">Оценка транспортных средств</Link>

            <Link className={styles.pageLink} href="/assessments">Автомобиля</Link>
            <Link className={styles.pageLink} href="/assessments">Автомобиля для наследства</Link>
            <Link className={styles.pageLink} href="/assessments">Грузовых автомобилей и спецтехники</Link>
            <Link className={styles.pageLink} href="/assessments">Мототехника</Link>
            <Link className={styles.pageLink} href="/assessments">Морские суда</Link>
            <Link className={styles.pageLink} href="/assessments">Воздушные суда</Link>
          </Card>
        </div>

        <div className={styles.cardRow}>
          <Card href="assessments/property" >

            <Link className={styles.SubHeadingLink} href="/assessments">Оценка нематериальных активов</Link>

            <Link className={styles.pageLink} href="/assessments">Нематериальные активы</Link>
            <Link className={styles.pageLink} href="/assessments">Интеллектуальная собственность</Link>
            <Link className={styles.pageLink} href="/assessments">Оценка брэнда</Link>
            <Link className={styles.pageLink} href="/assessments">Оценка ноу-хау</Link>
            <Link className={styles.pageLink} href="/assessments">Товарные знаки</Link>
            <Link className={styles.pageLink} href="/assessments">Авторские права</Link>
            <Link className={styles.pageLink} href="/assessments">Патент</Link >
            <Link className={styles.pageLink} href="/assessments">Оборудование</Link >
            <Link className={styles.pageLink} href="/assessments">Оружие</Link >
          </Card>

          <Card href="assessments/property" >
          <Link className={styles.SubHeadingLink} href="/assessments">Оценка движимого имущества</Link>
            <Link className={styles.pageLink} href="/assessments">Станки и специализированных машины</Link>
            <Link className={styles.pageLink} href="/assessments">Оргтехника</Link>
            <Link className={styles.pageLink} href="/assessments">Мебель и бытовая техника</Link>
          </Card>

          <Card href="assessments/property" >

            <Link className={styles.SubHeadingLink} href="/assessments">Составление рецензий на отчет об оценке</Link>

          </Card>
        </div>

      </div>

    </main>
  )
}