import { useEffect } from 'react'
import styles from './Start.module.css'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Run from "../../assets/image/run.png"

export default function Start() {

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/home')
        }, 1600);
    }, [])
  
  return (
    <motion.div className={styles.start_box} 
    initial={{opacity: 1}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <img className={styles.run} src={Run} alt="run" />
        <div>
            <span className={styles.starttext}>T</span>
            <span className={styles.starttext}>o</span>
            <span className={styles.starttext}>k</span>
            <span className={styles.starttext}>G</span>
            <span className={styles.starttext}>i</span>
            <span className={styles.starttext}>t</span>
        </div>
        {/* <div className={styles.starttext2}>토끼와 함께하는 커밋관리</div> */}
    </motion.div>
  )
}