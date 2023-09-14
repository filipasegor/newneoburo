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
        <Headline style={{marginBottom:"50px", width:"70%" }}>Оценка стоимости ущерба автомобиля</Headline>
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
      <div className={styles.bulletWrapper}>
        <Bullet>Чтобы от страховой потребовать конпенсацию</Bullet>
        <Bullet>Для судебных разбирательств</Bullet>
        <Bullet>Для виновника ДТП, чтобы убедиться в достоверности стоимости ремонта</Bullet>
        <Bullet>Если страховая выплатила меньше, чем стоимость ремонта</Bullet>
      </div>

      <HeadlineSm>Какие документы необходимы для проведения экспертизы</HeadlineSm>
      <div className={styles.documentWrapper}>
        <DocumentWrapper src={Images.FlatDoc1} alt="FlatDoc1" desc="Паспорт" />
        <DocumentWrapper src={Images.FlatDoc2} alt="FlatDoc2" desc="Страховка Авто" />
        <DocumentWrapper src={Images.FlatDoc3} alt="FlatDoc3" desc="Карточка Авто" />
        <DocumentWrapper src={Images.FlatDoc3} alt="FlatDoc3" desc="Фотографии ущерба авто" />
      </div>

      <HeadlineSm style={{marginTop: "100px" }}>Как проводится экспертиза</HeadlineSm>
      <div className={styles.bulletWrapper}>
        <Bullet>Оценка недвижимости начинается с предварительной консультации и заключения договора</Bullet>
        <Bullet>В договоре обозначается задание на оценку, сроки проведения стоимость услуг</Bullet>
        <Bullet>После получения копий документов, при необходимости, наш специалист выезжает на осмотр объекта оценки, осматривает объект и проводит фотофиксацию</Bullet>
        <Bullet>Эксперт изучает все полученные материалы и на основе их составляет отчет и заключение проведенной экспертизы. Мы высылаем отчет для ознакомления перед как его напечатать</Bullet>
        <Bullet>Финальный отчет мы отправляем клиенту на электронную почту вместе с актом оказанных услуг. Далее печатаем и прошиваем отчет. При необходимости доставляем отчет по адресу</Bullet>
      </div>

      <div className={styles.mediaWrapper}>
        <div className={styles.textMediaWrapper}>
          <HeadlineSm>Что по итогу клиент<br /> получает</HeadlineSm>
          <Text style={{ width: "500px", marginTop: "20px", marginBottom: "20px" }}>
          Мы считаем конечную стоимость ущерба, и все эти рассчеты и заключения формируем в официальный отчет. Этот отчет имеет юридическую силу. Поэтому вы можете с помощью него требовать конпенсацию от страховой или отстаивать свои права в суде
          </Text>
          <Link href="https://intellect-valuation.ru/files/131" className={styles.link}>Посмотреть пример отчета</Link>
        </div>
        <Image
          className={styles.mediaWrapperImage}
          alt="otchet"
          src={Images.otchet}>
        </Image>
      </div>

      <HeadlineSm style={{marginTop: "100px" }}>Кто будет проводить экспертизу</HeadlineSm>
      <Text style={{ width: "730px", marginTop: "20px" }}>Эксперты-техники с образованием эксперта-оценщика и актуальной лицензией СРО</Text>

      <ImgWrapper 
      headline="Лицензии"
      text="Наши клиенты могут быть уверены в профессионализме нашей команды: мы имеем СРО на проектные и монтажные работы, а также все разрешительные документы и допуски"
      >
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