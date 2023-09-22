import Image from 'next/image'
import Link from 'next/link'

import styles from './page.module.scss'

import {
  Headline,
  HeadlineMd,
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
  DocumentWrapper,
  Table,
  Stepper,
  Benefits
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
        <Headline style={{marginBottom:"50px"}}>Экспертиза стоимости восстановительного ремонта</Headline>
        <div className={styles.mainDescription}>
          <Text style={{width:"70%"}}>Независимая авто-техническая экспертиза стоимости восстановительного ремонта проводится в целях установления обстоятельств причинения вреда транспортному средству, установления повреждений транспортного средства и их причин, технологии, методов и стоимости его восстановительного ремонта</Text>
          <div className={styles.valueWrapper}>
            <Value label="Стоимость" value="от 10 000 ₽"></Value>
            <Value label="Срок" value="от 7 дней"></Value>
          </div>
        </div>
      </div>
      <Image
        className={styles.mainImage}
        alt="flat"
        src={Images.cardamage}>
      </Image>

      <HeadlineMd>​В каких случаях нужна экспертиза стоимости восстановительного ремонта</HeadlineMd>
      <div className={styles.bulletWrapper}>
        <Bullet>Страховая компания не признает ДТП страховым случаем и не выплачивает компенсацию</Bullet>
        <Bullet>Вас не устраивает размер выплаты, которую предлагает страховая компания</Bullet>
        <Bullet>Лицензия страховой организации была отозвана</Bullet>
        <Bullet>У виновника ДТП отсутствует страховой полис</Bullet>
        <Bullet>Для подготовки претензии к дорожным службам, а также к службам ЖКХ, если ваше транспортное средство пострадало по их вине</Bullet>
        <Bullet>При порчи Вашего транспортного средства в случаях действий третьих лиц</Bullet>
        <Bullet>В случаях, когда Вы виноваты в ДТП и уверены, что ущерб автомобилю пострадавшего не такой, как указано в результатах предъявляемой вам экспертизы</Bullet>
      </div>

      <HeadlineMd>Стоимость услуг</HeadlineMd>
      <div className={styles.tableWrapper}>
        <Table label="Первичная консультация" firstValue="Бесплатно" secondValue="—" ></Table>
        <Table label="Проведение экспертизы стоимости восстановительного ремонта и составление отчета" firstValue="От 7000 ₽" secondValue="3-5 дней"></Table>
        <Table label="Предварительный расчет стоимости восстановительного ремонта без отчета" firstValue="От 4000 ₽(входит в стоимость экспертизы)" secondValue="1-3 дня"></Table>
        <Table label="Осмотр транспортного средства рядом с любым из офисов «НЭО Бюро»" firstValue="Бесплатно" secondValue="1 день"></Table>
        <Table label="Выезд эксперта к месту осмотра транспортного средства" firstValue="От 1000 ₽" secondValue="1-3 дня"></Table>
        <Table label="Цветная копия экспертного заключения" firstValue="Бесплатно" secondValue="1 день"></Table>
        <Table label="Подготовка досудебной претензии" firstValue="5000 ₽" secondValue="3-5 дней"></Table>
        <Table label="Отправка телеграммы виновнику" firstValue="1500 ₽" secondValue="1 день"></Table>
        <Table last label="Курьерская доставка заключения" firstValue="От 1000 ₽" secondValue="1-3 дня"></Table>
      </div>

      <div className={styles.mediaWrapper}>
        <div className={styles.textMediaWrapper}>
        <HeadlineMd>Как мы еще помогаем клиентам</HeadlineMd>
        <Text style={{marginTop: "20px", marginBottom: "20px" }}>Консультируем и сопровождаем клиента при спорах со страховыми компаниями, виновниками, причинителями ущерба, а также при необходимости, представление его интересов в суде</Text> 
        </div>       
        <Image
          className={styles.mediaWrapperImage}
          alt="otchet"
          src={Images.Lifebuoy}>
        </Image>
      </div>


      <HeadlineMd style={{marginTop: "100px" }}>Как проводится экспертиза</HeadlineMd>
      <Stepper 
        headline="Консультация по экспертизе" 
        text="На первом этапе специалист анализирует все документы, предоставляемые клиентом. Он расспрашивает о целях экспертизы и консультирует по дальнейшим действиям" 
        src={Images.headphones}
        lineHeight={{height: "200px"}}
        >
      </Stepper>
      <Stepper 
        headline="Осмотр поврежденного транспортного средства" 
        text="На втором этапе подписывается договор, вносится оплата, назначается время и место проведения осмотра. Эксперт может осмотреть автомобиль рядом с любым из офисов «НЭО Бюро». Если машина сильно повреждена, производится выезд эксперта к месту ее стоянки. Если автомобиль имеет скрытые повреждения, осмотр автомобиль необходимо проводить в условиях СТО. Эксперт описывает выявленные повреждения, фотографирует их, собирает данные для расчетов и формирования экспертного заключения"
        src={Images.search}
        lineHeight={{height: "270px"}}
        >
      </Stepper>
      <Stepper 
        headline="Подготовка экспертного заключения" 
        text="На третьем этапе, эксперт проводит необходимые расчеты, формирует экспертное заключение и передает его Вам либо Вашему представителю лично в руки, либо посредством служб курьерской доставки"
        src={Images.paper}
        lineHeight={{height: "0px"}}
        >
      </Stepper>

      <HeadlineMd style={{marginTop: "100px" }}>Почему клиенты обращаются к нам</HeadlineMd>
      <Benefits 
          firstSrc={Images.diamond}
          firstText="Высокое качество услуг, оказываемое специалистами с многолетним опытом и навыками в этой сфере"
          secondSrc={Images.helmet}
          secondText= "Грамотная и профессиональная подготовка экспертных заключений и отчетов об оценке независимо от сложности ситуаций и исследований;"
          thirdSrc={Images.headset}
          thirdText="Квалифицированные консультации специалистов, в любых ситуациях и обстоятелсьтвах"
          fourthSrc={Images.percent}
          fourthText="Выгодная стоимость квалифицированных экспертиз и отчетов об оценке со скидками и специальными предложениями для постоянных клиентов"
          > 
      </Benefits>
      <ImgWrapper 
      className="Shadow"
      headline="Все необходимые лицензии и дипломы наших специалистов"
      text="Наши клиенты могут быть уверены в профессионализме нашей команды. Мы имеем все необходимые лицензии и документы, которые это подтверждают"
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