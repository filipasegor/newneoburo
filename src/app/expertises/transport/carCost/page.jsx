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
  title: 'Экспертиза утраты товарной стоимости',
  description: 'Экспертиза утраты товарной стоимости',
}

export default function ExpertisesCarCost() {
  return (
    <main className={styles.main}>
      <ArrowBack />
      <div className={styles.HeadWrapper}>
        <Headline>Экспертиза утраты товарной стоимости</Headline>
        <div className={styles.mainDescription}>
          <Text style={{ width: "100vw"}}>С учетом постановления Пленума Верховного суда РФ№20, утрата товарной стоимости транспортного средства – это уменьшение стоимости автомобиля вследствие причиненного повреждения, утраты прочности деталей, основных агрегатов и соединений, полученных в ходе дорожно-транспортного происшествия (и/или последующих ремонтных работ), которая должна возмещаться в полной мере, после полученных повреждений. Тип повреждения не имеет значения, это может быть классическое ДТП или падение на кузов транспортного средства дерева, сосульки или других элементов. УТС можно получить во всех случаях, повлекших за собой нарушение целостности автомобиля.</Text>

          <div className={styles.valueWrapper}>
            <Value label="Стоимость" value="от 10 000 ₽"></Value>
            <Value label="Срок" value="от 10 дней"></Value>
          </div>
        </div>
      </div>
      <Image
        className={styles.mainImage}
        alt="flat"
        src={Images.carCost}>
      </Image>

      <HeadlineSm>​Как проводится экспертиза и что для этого нужно?</HeadlineSm>
      <Text style={{ width: "730px", marginTop: "20px" }}>Проведение экспертизы начинается с предварительной консультации и заключения договора. В договоре обозначаются вопросы, поставленные перед экспертом, сроки проведения стоимость услуг. Для заключения договора на экспертизу утраты товарной стоимости вам потребуется:</Text>
      <div className={styles.bulletWrapper}>
        <Bullet>Документы на автомобиль (паспорт транспортного средства и/или свидетельство о регистрации транспортного средства);</Bullet>
        <Bullet>Административные материалы о данном происшествии (постановление, определение, талон-уведомление и тд);</Bullet>
        <Bullet>Для виновника ДТП, чтобы убедитьсяв достоверности стоимости ремонта;</Bullet>
        <Bullet>Сервисная книжка (если автомобиль находится в пределах срока гарантийного обслуживания);</Bullet>
        <Bullet>Паспортные данные Заказчика оценки</Bullet>
      </div>
      <Text style={{ width: "730px", marginBottom: "80px" }}>После получения копий документов, при необходимости, наш специалист выезжает на осмотр объекта экспертизы, осматривает объект и проводит фотоциксацию. В случае, если имеется вторая заинтересованная сторона (страховщик, участник ДТП и т.д.), отправляется официальное уведомление о месте и времени проведения экспертизы с помощью телеграммы Ф.ТГ-1а либо в электронной форме. Мы подскажем, что нужно отразить в тексте телеграммы. Процедура проведения экспертизы занимает до 3 рабочих дней с момента осмотра объекта экспертизы и/или предоставления исчерпывающей информации для ее проведения. Далее, экспертное заключение направляется клиенту вместе с актом оказанных услуг, на котором клиенту необходимо поставить подпись. Доставка заключения эксперта возможна в зависимости от района расположения. </Text>

      <HeadlineSm>Что учитывают эксперты?</HeadlineSm>
      <Text style={{ width: "730px", marginTop: "20px" }}>Подготавливая экспертное заключение, компания ООО «НЭО Бюро», учитывает большое количество критериев, а именно:</Text>
      <div className={styles.bulletWrapper}>
        <Bullet>Уровень повреждений автомобиля</Bullet>
        <Bullet>Рыночную стоимость автомобиля</Bullet>
        <Bullet>Страну производителя автомобиля</Bullet>
        <Bullet>Техническое состояние автомобиля</Bullet>
        <Bullet>Пробег и год выпуска автомобиля</Bullet>
        <Bullet>Износ автомобиля</Bullet>
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