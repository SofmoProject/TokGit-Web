import Nav from "../components/nav/Nav";
import { motion } from "framer-motion";
import styles from './Main.module.css'
import Pet from '../assets/image/rabbit2.png'

export default function Main() {
  
  return (
    <>
    
    <Nav />
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}} className={styles.maindiv} >
        <div className={styles.main_left}>
          <img className={styles.Pet} src={Pet} alt="Pet" />
          <div> 캐릭터 닉네임</div>
          <div> 총 커밋 수: 100</div>
          <div className={styles.level}> Level 99</div>
        </div>

        <div className={styles.main_right}>
          <div> 오늘의 커밋 횟수</div>
          <div> 커밋 bar 그래프</div>

          <div> 최근 커밋 내역 </div>
          <div>  커밋 내역 </div>
          <div>  오늘의 한 마디 </div>

        </div>
    </motion.div>
    
    </>

  )
}