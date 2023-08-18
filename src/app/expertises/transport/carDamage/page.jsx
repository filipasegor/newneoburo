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
  title: 'Оценка стоимости ущерба автомобиля',
  description: 'Оценка стоимости ущерба автомобиля',
}

export default function ExpertisesCarDamage() {
  return (
    <main className={styles.main}>
      <ArrowBack />
      <div className={styles.HeadWrapper}>
        <Headline>Оценка стоимости ущерба автомобиля</Headline>
        <div className={styles.mainDescription}>
          <Text>Если ваше авто пострадало, то мы посчитаем стоимость ущерба, чтобы вы могли возместить полную стоимость и сделать ремонт.</Text>
          <div className={styles.valueWrapper}>
            <Value label="Стоимость" value="от 4 000 ₽"></Value>
            <Value label="Срок" value="от 4 дней"></Value>
          </div>
        </div>
      </div>
      <Image
        className={styles.mainImage}
        alt="flat"
        src={Images.cardamage}>
      </Image>

      <HeadlineSm>​​Для чего нужна оценка ущерба</HeadlineSm>
      <Text style={{ width: "730px", marginTop: "20px" }}>Подготавливая отчет об оценке недвижимости, аккредитованная Сбербанком оценочная компания ООО «НЭО Бюро», учитывает большое количество критериев, а именно:</Text>
      <div className={styles.bulletWrapper}>
        <Bullet>Чтобы от страховой потребовать конпенсацию</Bullet>
        <Bullet>Для судебных разбирательств</Bullet>
        <Bullet>Для виновника ДТП, чтобы убедитьсяв достоверности стоимости ремонта</Bullet>
        <Bullet>Если страховая выплатила меньше, чем стоимость ремонта</Bullet>
      </div>

      <div className={styles.mediaWrapper}>
        <div className={styles.textMediaWrapper}>
          <HeadlineSm>Что по итогу клиент<br /> получает</HeadlineSm>
          <Text style={{ width: "500px", marginTop: "20px", marginBottom: "20px" }}>
            Мы считаем конечную стоимость ущерба, и все эти рассчеты и заключения формируем в официальный отчет. Этот отчет имеет юридическую силу. Поэтому вы можете с помощью него требовать конпенсацию от страховой или отстаивать свои права в суде.
          </Text>
          <Link href="https://intellect-valuation.ru/files/131" className={styles.link}>Посмотреть пример отчета</Link>
        </div>
        <Image
          className={styles.mediaWrapperImage}
          alt="otchet"
          src={Images.otchet}>
        </Image>
      </div>

      <ImgWrapper desc="Лицензии">
        <Image
          className={styles.document}
          alt="propertyDoc1"
          src={Images.propertyDoc1}>
        </Image>
        <Image
          className={styles.document}
          alt="propertyDoc2"
          src={Images.propertyDoc2}>
        </Image>
        <Image
          className={styles.document}
          alt="propertyDoc3"
          src={Images.propertyDoc3}>
        </Image>
        <Image
          className={styles.document}
          alt="propertyDoc4"
          src={Images.propertyDoc4}>
        </Image>
      </ImgWrapper>

    </main>
  )
}