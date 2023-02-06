import styles from './Button.module.css'
export default function Button({text, handleClick}) {

  return ( 
    <button className={styles.basic} onClick={handleClick}>
        {text}
    </button>
  )
}