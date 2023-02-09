import Nav from "../components/nav/Nav";
import { motion } from "framer-motion";
import styles from './Rank.module.css';
import Rank1 from '../assets/image/rank1.png'
import Rank2 from '../assets/image/rank2.png'
import Rank3 from '../assets/image/rank3.png'
import Tokki1 from '../assets/image/tokki1.png'
import Tokki2 from '../assets/image/tokki2.png'
import Tokki3 from '../assets/image/tokki3.png'

export default function Rank() {
  
  return (
    <>
    <Nav/>
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}} className={styles.rank_div}>
        <div className={styles.rank_box}>
          <div className={styles.rank_image}>
            <img className={styles.medal} src={Rank1} alt="rank1" />
            <img className={styles.tokki} src={Tokki1} alt="tokki1"/>
          </div>
          <div className={styles.rank_text}>
            Level 99 - 이현우 총 커밋수: 1000회
            <div className={styles.github}>chichyun92@gmail.com</div>
          </div> 
        </div>
        <div className={styles.rank_box}>
          <div className={styles.rank_image}>
            <img className={styles.medal} src={Rank2} alt="rank2" />
            <img className={styles.tokki} src={Tokki2} alt="tokki2"/>
          </div>
          <div className={styles.rank_text}>
            Level 80 - 최하영 총 커밋수: 800회
            <div className={styles.github}>chichyun92@gmail.com</div>
          </div> 
        </div>
        <div className={styles.rank_box}>
          <div className={styles.rank_image}>
            <img className={styles.medal} src={Rank3} alt="rank3" />
            <img className={styles.tokki} src={Tokki3} alt="tokki3"/>
          </div>
          <div className={styles.rank_text}>
            Level 20 - 오윤택 총 커밋수: 200회
            <div className={styles.github}>chichyun92@gmail.com</div>
          </div> 
        </div>
        <div className={styles.rank_box}>
          <div className={styles.rank_image}>
            <img className={styles.medal} src={Rank3} alt="rank3" />
            <img className={styles.tokki} src={Tokki3} alt="tokki3"/>
          </div>
          <div className={styles.rank_text}>
            Level 20 - 오윤택 총 커밋수: 200회
            <div className={styles.github}>chichyun92@gmail.com</div>
          </div> 
        </div>
        <div className={styles.rank_box}>
          <div className={styles.rank_image}>
            <img className={styles.medal} src={Rank3} alt="rank3" />
            <img className={styles.tokki} src={Tokki3} alt="tokki3"/>
          </div>
          <div className={styles.rank_text}>
            Level 20 - 오윤택 총 커밋수: 200회
            <div className={styles.github}>chichyun92@gmail.com</div>
          </div> 
        </div>
    </motion.div>
    </>
  )
}