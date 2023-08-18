import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function SegmentButton(props) {

  const activeButton = (
    <button className={styles.active}>{props.children}</button>
  );
  
  const defaultButton = (
    <button className={styles.default}>{props.children}</button>
  )


  return (
    <>
     {props.className === "active" ? activeButton : defaultButton}
    </>
  );
}