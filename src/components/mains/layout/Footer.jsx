
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <p>@НЭО-Бюро 2023</p>
        <Link className={styles.footerLink} href="tel:+7495260-2673">+7 (495) 260-2673</Link>
        <Link className={styles.footerLink} href="mailto:Info@neoburo.ru">info@neoburo.ru</Link>
        <p>Все права защищены</p>
      </footer>
  )
}