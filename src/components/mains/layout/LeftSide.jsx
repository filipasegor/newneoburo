
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

import arrow from '../../../../public/arrow.svg'

import tg from '../../../../public/tg.svg'
import mail from '../../../../public/mail.svg'
import logo from '../../../../public/logo.svg'
import wa from '../../../../public/wa.svg'

export default function LeftSide() {
  return (
      <div className={styles.leftSide}>
        <div className={styles.logoWrapper}>
          <Link href="/">
              <Image 
                className={styles.logo}
                alt="logo"
                src={logo}>
              </Image>
            </Link>
          </div>
        <div className={styles.navbar}>
          <Link className={styles.link} href="/assessments">Оценка</Link>   
          <Link className={styles.link} href="/expertises">Экспертиза</Link>
          <Link className={styles.link} href="/laws">Юридическая<br />поддержка</Link> 
          <Link className={styles.link} href="/team">Эксперты</Link> 
          <Link className={styles.link} href="/about">О компании</Link>
          <Link className={styles.link} href="/contacts">Контакты</Link>
        </div>
        <div className={styles.socialLinks}>
          <Link href="/">
              <Image 
                className={styles.social}
                alt="mail"
                src={mail}>
              </Image>
            </Link>
            <Link href="/">
              <Image 
                className={styles.social}
                alt="tg"
                src={tg}>
              </Image>
            </Link>
            <Link href="/">
              <Image 
                className={styles.social}
                alt="wa"
                src={wa}>
              </Image>
            </Link>
        </div>
      </div>
  )
}