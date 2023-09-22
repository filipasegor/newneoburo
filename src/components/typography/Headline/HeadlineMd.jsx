import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function HeadlineMd(props) {
  return (
    <h1 className={styles.headlineMd} style={props.style}>{props.children}</h1>
  );
}