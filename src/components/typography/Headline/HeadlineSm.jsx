import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function HeadlineSm(props) {
  return (
    <h1 className={styles.headlineSm} style={props.style}>{props.children}</h1>
  );
}