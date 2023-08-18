
import styles from './styles.module.scss'

export default function Bullet({children}) {

  return (
    <div className={styles.Wrapper}>      
      <div className={styles.Bullet}></div>
      <p className={styles.Text}>{children}</p>
     </div> 
  );
}