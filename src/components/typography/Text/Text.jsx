import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function Text(props) {
  return (
    <p className={styles.text} style={props.style}>{props.children}</p>
  );
}