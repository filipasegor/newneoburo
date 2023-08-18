import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function TextBold(props) {
  return (
    <p className={styles.textBold} style={props.style}>{props.children}</p>
  );
}