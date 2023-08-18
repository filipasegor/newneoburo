
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'


export default function RightSide() {
  return (
    <div className={styles.rightSide}>
      <Link className={styles.link} href="tel:+7495260-2673"> +7 (495) 260 26 73</Link>
      <button className={styles.button} >Заказть услугу</button>
    </div>
  )
}