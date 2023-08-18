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
  ImgWrapper,
  ArrowBack,
} from '@/components/index'

import Images from '@/assets/index';

export const metadata = {
  title: 'Оценка недвижимости',
  description: 'Оценка недвижимости',
}

export default function AssessmentsProperty() {
  return (
    <main className={styles.main}>
        <ArrowBack /> 
        <div className={styles.HeadWrapper}>
          <Headline>{metadata.description}</Headline>
          <Text>Oцeнка cтoимocти нeдвижимocти — это профессиональная деятельность, направленная на установление стоимости конкретного объекта. Объектами для оценки недвижимости являются квартиры и комнаты, дачи и земля, коммерческие объекты (офисы, производственные цеха и тд.).</Text>
          <Text>Компания НЭО Бюро проведет для вас оценочное исследование для достижения любой цели. Наши специалисты предоставят точный результат. Обращайтесь на первую консультацию, чтобы узнать подробности.</Text>
        </div> 
        <Image 
          className={styles.mainImage}
          alt="property"
          src={Images.property}>
        </Image>

      <HeadlineSm>Направления оценки недвижимости:</HeadlineSm>
      <div className={styles.cards}>
          <div className={styles.cardRow}>
            <Card href="property/flat" linkText="Подробнее" >
              <SubHeading style={{height: "60px"}}>Оценка квартиры</SubHeading>
              <Text>от 4 000 ₽</Text>
              <Text>от 5 дней</Text>
            </Card>

            <Card href="assessments/property" linkText="Подробнее" >
              <SubHeading style={{height: "60px"}}>Оценка загородной недвижимости</SubHeading>
              <Text>от 4 000 ₽</Text>
              <Text>от 5 дней</Text>
            </Card>

            <Card href="assessments/property" linkText="Подробнее" >
              <SubHeading style={{height: "60px"}}>Оценка комнаты</SubHeading>
              <Text>от 4 000 ₽</Text>
              <Text>от 5 дней</Text>
            </Card> 
          </div>

          <div className={styles.cardRow}>
            <Card href="/" linkText="Подробнее" >
              <SubHeading style={{height: "60px"}}>Оценка земельного участка</SubHeading>
              <Text>от 4 000 ₽</Text>
              <Text>от 5 дней</Text>
            </Card>

            <Card href="/" linkText="Подробнее">
              <SubHeading style={{height: "60px"}}>Бизнес и ценные бумаги</SubHeading>
              <Text>от 4 000 ₽</Text>
              <Text>от 5 дней</Text>
            </Card>

            <Card href="/" linkText="Подробнее" >
              <SubHeading style={{height: "60px"}}>Оценка стоимости гаража</SubHeading>
              <Text>от 4 000 ₽</Text>
              <Text>от 5 дней</Text>
            </Card>
          </div>
        </div>
        
        <HeadlineSm>В каких случаях проводится:</HeadlineSm>
        <div className={styles.bulletWrapper}>
          <Bullet>При продаже или покупке квартиры</Bullet>
          <Bullet>Для обмена недвижимости</Bullet>
          <Bullet>При оформлении ипотеки</Bullet>
          <Bullet>Для раздела имущества по суду</Bullet>
          <Bullet>Для определения активов компании</Bullet>
          <Bullet>При оформлении договора дарения или завещания (по желанию собственника)</Bullet>
          <Bullet>Для использования квартиры в качестве залога</Bullet>
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