import Nav from "../components/nav/Nav";
import { motion } from "framer-motion";
import styles from './Main.module.css'
import Pet from '../assets/image/rabbit2.png'
import Jandi from "../components/chart/Jandi";

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
          <div className={styles.level}> </div>
        </div>

        <div className={styles.main_right}>
          {/* <div> 이번달 잔디</div> */}
          <Jandi />
        </div>
    </motion.div>
    
    </>

  )
}