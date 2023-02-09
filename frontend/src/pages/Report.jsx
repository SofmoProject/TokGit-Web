import Nav from "../components/nav/Nav";
import { motion } from "framer-motion";
import Calendar from 'react-calendar';
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import styles from './Report.module.css'
import './Calendar.css'
import Commit from '../assets/image/commit.png'

export default function Report() {
  const [value, onChange] = useState(new Date());

  return (
    <>
    <Nav/>
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}} className={styles.report_div}>
        <Calendar className={styles.calendar} onChange={onChange} value={value} />
        <div className={styles.commit_box}>
          <div className={styles.commit_title}>
          <img className={styles.commit} src={Commit} alt="commit" />
          커밋 내역
          </div> 
          <div className={styles.commit_text}>Feat: Calendar CSS</div>
          <div className={styles.commit_text}>Feat: Main page 기능</div>
          <div className={styles.commit_text}>Docs: 문서 작성</div>
          <div className={styles.commit_text}>Feat: Main page 기능</div>
          <div className={styles.commit_text}>Docs: 문서 작성</div>
        </div>
    </motion.div>
    </>
  )
}