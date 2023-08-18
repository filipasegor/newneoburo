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
  DocumentWrapper
} from '@/components/index'

import Images from '@/assets/index';

export const metadata = {
  title: 'Оценка офисных помещений',
  description: 'Оценка офисных помещений',
}

export default function AssessmentsСommercialProperty() {
  return (
    <main className={styles.main}>
      <ArrowBack />
      <div className={styles.HeadWrapper}>
        <Headline>{metadata.description}</Headline>
        <Text>Оценка офисных помещений – определение рыночной стоимости недвижимости и создание отчета об оценке – официального документа, подтверждающего ликвидность объекта для необходимых целей заказчика.</Text>
      </div>
      <Image
        className={styles.mainImage}
        alt="property"
        src={Images.offices}>
      </Image>

      <HeadlineSm>Как проводится оценка и что для этого нужно?</HeadlineSm>
      <Text style={{ width: "730px", marginTop: "20px" }}>Оценка офисных помещений начинается с предварительной консультации и заключения договора. В договоре обозначается задание на оценку, сроки проведения стоимость услуг. Для заключения договора на оценку офисных помещений вам потребуется:</Text>
      
      <div className={styles.documentWrapper}>
        <DocumentWrapper src={Images.FlatDoc1} alt="FlatDoc1" desc="Правоустанавливающая документация" />
        <DocumentWrapper src={Images.FlatDoc2} alt="FlatDoc2" desc="Техническая документация" />
        <DocumentWrapper src={Images.FlatDoc3} alt="FlatDoc3" desc="Реквизиты Заказчика оценки" />
      </div>
      <Text style={{ width: "730px", marginBottom: "50px" }}>После получения копий документов, при необходимости, наш специалист выезжает на осмотр объекта оценки, осматривает объект и проводит фотоциксацию. Процедура оценки офисных помещений занимает до 5 рабочих дней. Далее отчет направляется клиенту вместе с актом оказанных услуг, на котором клиенту необходимо поставить подпись. Доставка отчета возможна в зависимости от района расположения</Text>

      <HeadlineSm>Что учитывают оценщики?</HeadlineSm>
      <Text style={{ width: "730px", marginTop: "20px" }}>Подготавливая отчет об оценке коммерческой недвижимости оценочная компания ООО «НЭО Бюро» анализирует большое количество критериев, а именно:</Text>
      <div className={styles.bulletWrapper} style={{ width: "50%" }}>
        <TextBold>1. Местоположение</TextBold>
        <Text style={{ marginBottom: "30px" }}>Расположение объекта может увеличить или снизить его рыночную стоимость. Оно характеризует различие в инвестиционной привлекательности недвижимости в зависимости от районов, близости к центру города (экономическое расположение), развитости окружающей инфраструктуры, линии объекта недвижимости — расположение относительно красной линии.</Text>

        <TextBold>2. Транспортная доступность</TextBold>
        <Text style={{ marginBottom: "30px" }}>Независимо от того, расположен ли оцениваемый офис в центре или на окраине города, подъездные пути как на личном автотранспорте, так и на общественном должны быть удобными, а само здание — заметным и легко узнаваемым.</Text>

        <TextBold>4. Этаж расположения</TextBold>
        <Text style={{ marginBottom: "30px" }}>Для офисов предпочтительно расположение на первом этаже. Это обеспечивает простой доступ для клиентов и хорошую просматриваемость с улицы, если компания рассчитывает на привлечение прохожих. Часто для офисных помещений есть возможность обустроить отдельный вход, что также является преимуществом при определении рыночной стоимости. Объекты, расположенные на цокольном и подвальных этажах, менее востребованы. Их рыночная стоимость значительно ниже.</Text>
        
        <TextBold>5. Общая площадь помещения</TextBold>
        <Text style={{ marginBottom: "30px" }}>Фактор масштаба так же влияет на рыночную стоимость офисов. Чем больше площадь, тем меньше себестоимость ее квадратного метра.</Text>

        <TextBold>6. Качество отделки</TextBold>
        <Text style={{ marginBottom: "30px" }}>Состояние помещения по качеству отделку оценивают по четырем категориям:<br />
        1. Без отделки.<br />
        2. Требуется проведение косметического ремонта.<br />
        3. Стандартная офисная отделка.<br />
        4. Высококачественная отделка или евроремонт.<br />
        Чтобы определить к какой категории относится оцениваемое офисное помещение, оценщик производит осмотр недвижимости и делает фотофиксацию.
        </Text>

        <TextBold>7. Парковка</TextBold>
        <Text style={{ marginBottom: "30px" }}>Парковка на территории или подземный паркинг — преимущество для офиса, что отражается на повышении стоимости.</Text>

        <TextBold>8. Наличие отдельного входа</TextBold>
        <Text style={{ marginBottom: "30px" }}>При определении рыночной стоимости офисного помещения учитывают наличие отдельного входа, определяющие удобство доступа. Если у объекта есть отдельный вход с улицы, рыночная оценка стоимости офиса будет более высокой. При входе со двора она будет ниже, при отсутствии отдельного входа — еще ниже.</Text>

        <TextBold>9. Дополнительные услуги и инфраструктура</TextBold>
        <Text style={{ marginBottom: "30px" }}>Охрана и системы безопасности, услуги центральной рецепции, кафе/столовые для сотрудников, банкоматы, фитнес-центр и т. д. Поскольку каждый объект имеет свой набор характеристик, процесс оценки стоимости офисных помещений нельзя свести к шаблонной методике. При проведении независимой оценки Оценщик сам выделяет факторы, которые наиболее сильно влияют на стоимость и производит расчет. Заказать оценку вы можете сделав заявку на сайте.</Text> 
      </div>

      <HeadlineSm>Преимущества Нашей Компании</HeadlineSm>
      <Text style={{ width: "730px", marginTop: "20px", marginBottom: "20px" }}>
        Экспертно-оценочная компания ООО «НЭО Бюро» профессионально занимается подготовкой отчетов об оценке рыночной стоимости имущества для Сбербанка, а также оценивают недвижимость в других целях. За годы практики сотрудники накопили бесценный опыт, позволяющий делать свою работу на высоком уровне и отвечать за результат. Отчеты нашей компании соответствуют всем требованиям законодательства, а оценщики являются членами СРО, имеют квалификационные аттестаты и страховой полис.
      </Text>
      <Link href="https://intellect-valuation.ru/files/131" className={styles.link}>ПАО СБЕРБАНК. Включение в Перечень оценочных организаций.</Link>

      <HeadlineSm style={{ marginTop: "80px" }}>Наша компания аккредитована:</HeadlineSm>
      <div className={styles.logoDescWrapper}>
        <LogoDesc src={Images.Alfa} alt="alfa" desc="в Сбербанке" />
        <LogoDesc src={Images.raff} alt="tink" desc="Газпромбанке" />
        <LogoDesc src={Images.vtb} alt="tink" desc="Совкомбанке" />
        <LogoDesc src={Images.tink} alt="tink" desc="Банке Уралсиб" />
        <LogoDesc src={Images.vtb} alt="tink" desc="Московском индустриальном бане" />
        <LogoDesc src={Images.tink} alt="tink" desc="Райффайзенбанке" />
        <LogoDesc src={Images.raff} alt="tink" desc="Банк Россия" />
      </div>

      <ImgWrapper desc="Отчеты нашей компании принимаются банками:">
        <Image
          className={styles.bankImage}
          alt="bank1"
          src={Images.bank1}>
        </Image>
        <Image
          className={styles.bankImage}
          alt="bank2"
          src={Images.bank2}>
        </Image>
        <Image
          className={styles.bankImage}
          alt="bank3"
          src={Images.bank3}>
        </Image>
        <Image
          className={styles.bankImage}
          alt="bank1"
          src={Images.bank1}>
        </Image>
      </ImgWrapper>

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