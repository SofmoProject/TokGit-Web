import Nav from "../components/nav/Nav";
import { motion } from "framer-motion";
import Button from "../components/btn/Button";
import styles from "./Rank.module.css"

export default function Settings() {
  
  return (

    <>
    <Nav/>
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}} className={styles.settings_div}>
        <Button text="닉네임 변경하기"/>
        <Button text="만든 사람들"/>
        <Button text="로그아웃"/>
    </motion.div>
    </>
  )
}