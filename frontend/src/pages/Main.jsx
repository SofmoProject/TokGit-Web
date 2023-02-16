import Nav from "../components/nav/Nav";
import { motion } from "framer-motion";
import styles from './Main.module.css'
import Pet from '../assets/image/rabbit2.png';
import Jandi from "../components/chart/Jandi";
import Progress from "../components/chart/Progress";
import Progress2 from "../components/chart/Progress2";

export default function Main() {
  
  return (
    <>
    
    <Nav />
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}} className={styles.maindiv} >
        <div className={styles.main_left}>
          <div className={styles.pet_name}>토깽이</div>
          <div className={styles.pet_div}>
            <span className={styles.level}>LEVEL 10</span>
            <img className={styles.Pet} src={Pet} alt="Pet" />
          </div>
        </div>

        <div className={styles.main_right}>
          {/* <div> 이번달 잔디</div> */}
          <div className={styles.today_div}>
            <div style={{margin:"15px"}}> 오늘의 커밋 목표 (6/10회)</div>
            <Progress />
          </div>
          <div className={styles.level_div}>
            <div style={{margin:"15px"}}> 경험치 EXP</div>
            <Progress2 />
          </div>
          <div className={styles.jandi_div}>
            <div style={{margin:"15px"}}> 나의 Commit 추이</div>
            <Jandi />
          </div>
        </div>
    </motion.div>
    
    </>

  )
}