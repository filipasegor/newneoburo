import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function SubHeading(props) {
  return (
    <h1 className={styles.headline}>{props.children}</h1>
  );
}