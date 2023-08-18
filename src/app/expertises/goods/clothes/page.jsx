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
  title: 'Экспертиза одежды',
  description: 'Экспертиза одежды',
}

export default function ExpertisesClothes() {
  return (
    <main className={styles.main}>
      <ArrowBack />
      <div className={styles.HeadWrapper}>
        <Headline>Экспертиза одежды</Headline>
        <div className={styles.mainDescription}>
          <Text>Независимая экспертиза одежды - специальное компетентное исследование потребительских свойств (качества) одежды для определения причин образования дефектов. По окончанию экспертизы одежды заказчику выдается заключение экспертизы о соответствии/несоответсвии стандартам и возможности дальнейшего использования по целевому назначению. </Text>
          <div className={styles.valueWrapper}>
            <Value label="Стоимость" value="от 10 000 ₽"></Value>
            <Value label="Срок" value="от 10 дней"></Value>
          </div>
        </div>
      </div>
      <Image
        className={styles.mainImage}
        alt="flat"
        src={Images.cardamage}>
      </Image>


      <HeadlineSm>Как проводится экспертиза и что для этого нужно?</HeadlineSm>
      <Text style={{ width: "730px", marginTop: "20px" }}>Проведение экспертизы начинается с предварительной консультации и заключения договора. В договоре обозначаются вопросы, поставленные перед экспертом, сроки проведения стоимость услуг. Для заключения договора на экспертизу одежды вам потребуется:</Text>
      <div className={styles.documentWrapper}>
        <DocumentWrapper src={Images.FlatDoc1} alt="FlatDoc1" desc="Одежда, которую необходимо исследовать" />
        <DocumentWrapper src={Images.FlatDoc2} alt="FlatDoc2" desc="Подтверждение о приобретении товара в виде чека, тары, лейбла" />
        <DocumentWrapper src={Images.FlatDoc3} alt="FlatDoc3" desc="Паспортные данные Заказчика оценки" />
        <Text style={{ width: "730px", marginTop: "20px" }}>После получения копий документов, при необходимости, наш специалист осматривает объект и проводит фотоциксацию. Процедура проведения экспертизы занимает до 5 рабочих дней с момента осмотра объекта экспертизы и/или предоставления исчерпывающей информации для ее проведения. Далее, экспертное заключение направляется клиенту вместе с актом оказанных услуг, на котором клиенту необходимо поставить подпись. Доставка заключения эксперта возможна в зависимости от района расположения</Text>
      </div>

      <HeadlineSm>Что учитывают оценщики?</HeadlineSm>
      <Text style={{ width: "730px", marginTop: "20px" }}> Экспертиза одежды проводится на соответствие исследуемого товара ГОСТам, техническим условиям, образцам товара и его дубликатам. Подготавливая экспертное заключение, компания ООО «НЭО Бюро», учитывает большое количество критериев, а именно:</Text>
      <div className={styles.bulletWrapper}>
        <Bullet>Ненадлежащее качество ткани из которого сшита одежда либо изготовлена обувь;</Bullet>
        <Bullet>Неравномерная окраска волокон ткани;</Bullet>
        <Bullet>Швы, несоответствующие требованиям к пошиву одежды/обуви;</Bullet>
        <Bullet>Несоблюдение установленной технологи пошива того или иного изделия;</Bullet>
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

      <HeadlineSm>Преимущества Нашей Компании</HeadlineSm>
      <Text style={{ width: "730px", marginTop: "20px", marginBottom: "20px" }}>
      Экспертно-оценочная компания ООО «НЭО Бюро» с 2006 года оказывает услуги независимой товароведческой экспертизы. В нашей практике сотни положительно разрешенных дел по возврату средств у продавцов и поставщиков. Наши заключения принимают суды любой инстанции. За годы практики сотрудники накопили бесценный опыт, позволяющий делать свою работу на высоком уровне и отвечать за результат. Экспертные заключения нашей компании соответствуют всем требованиям законодательства, а эксперты имеют профессиональные дипломы и аттестаты.
      </Text>
      <Link href="https://intellect-valuation.ru/files/131" className={styles.link}>ПАО СБЕРБАНК. Включение в Перечень оценочных организаций.</Link>

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