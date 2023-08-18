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
  title: 'Экспертиза всех видов имущества',
  description: 'Экспертиза всех видов имущества',
}

export default function Expertises() {
  return (
    <main className={styles.main}>

      <h1 className={styles.mainHeadline}>{metadata.title}</h1>


      <div className={styles.cards}>
        <div className={styles.cardRow}>
          <Card href="expertises/property" >

            <Link className={styles.SubHeadingLink} href="/expertises">Автотехническая экспертиза</Link>

            <Link className={styles.pageLink} href="expertises/transport/carDamage">Экспертиза стоимости ущерба после ДТП</Link>
            <Link className={styles.pageLink} href="/expertises/transport/carCost">Экспертиза утраты товарной стоимости</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза годных остатков</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза обстоятельств ДТП</Link>
            <Link className={styles.pageLink} href="/expertises">Транспортно-трасологическая экспертиза</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза ПДД</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза состояния ТС</Link >
            <Link className={styles.pageLink} href="/expertises">Экспертиза дорожных условий</Link >
          </Card>

          <Card href=" expertises/property" >

            <Link className={styles.SubHeadingLink} href="/expertises">Землеустроительная экспертиза</Link>

            <Link className={styles.pageLink} href="/expertises">Экспертиза площадь участка земли и его частей</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза границ участка</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза регламента использования участка </Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза соответствия границ участка </Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза позиций объектов в границах участка</Link>
          </Card>

          <Card href=" expertises/property" >

            <Link className={styles.SubHeadingLink} href="/ expertises">Товароведческая экспертиза</Link>

            <Link className={styles.pageLink} href="/expertises/clothes/goods">Экспертиза одежды</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза мебели</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза техники </Link>
          </Card>
        </div>

        <div className={styles.cardRow}>
          <Card href="/expertises" >

            <Link className={styles.SubHeadingLink} href="/expertises">Строительно-техническая экспертиза</Link>

            <Link className={styles.pageLink} href="/expertises">Экспертиза качества ремонта квартиры</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза причин залива помещений</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза стоимости ремонта после залива/пожара</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза для узаконивания самостроев и перепланировок </Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза сметной документации</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза технического состояния объектов и зданий</Link>
          </Card>

          <Card href="/expertises" >
            <Link className={styles.SubHeadingLink} href="/expertises">Финансово-экономическая экспертиза</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза соответствия хозяйственно-финансовых операций</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза оформленных операций приема, хранения, расходования ТМЦ, денежных средств</Link>
            <Link className={styles.pageLink} href="/expertises">Экспертиза процедуры банкротства</Link>
          </Card>


          <Card href="/expertises" >
            <Link className={styles.SubHeadingLink} href="/expertises">Почерковедческая экспертиза</Link>
            <Link className={styles.pageLink} href="/expertises">Почерковедческая экспертиза подписи</Link>
            <Link className={styles.pageLink} href="/expertises">Почерковедческая экспертиза оттиска печати</Link>
          </Card>
        </div>

        <div className={styles.cardRow} style={{width:"56%"}}>
          <Card href="/expertises" >

            <Link className={styles.SubHeadingLink} href="/ expertises">Судебная экспертиза</Link>

            <Link className={styles.pageLink} href="/expertises">Судебная автотехническая экспертиза</Link>
            <Link className={styles.pageLink} href="/expertises">Судебная землеустроительная экспертиза</Link>
            <Link className={styles.pageLink} href="/expertises">Судебная товароведческая экспертиза</Link>
            <Link className={styles.pageLink} href="/expertises">Судебная строительно-техническая экспертиза</Link>
            <Link className={styles.pageLink} href="/expertises">Судебная финансовая экспертиза</Link>
            <Link className={styles.pageLink} href="/expertises">Судебная почерковедческая экспертиза</Link>
          </Card>

          <Card href="/expertises" style={{width:"66%"}} >
            <Link className={styles.SubHeadingLink} href="/expertises">Составление рецензий на экспертное заключение</Link>
          </Card>
        </div>

      </div>

    </main >
  )
}