import Nav from "../components/nav/Nav";
import { motion } from "framer-motion";


export default function Main() {
  
  return (
    <>
    
    <Nav />
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        유저 기본 화면
    </motion.div>
    
    </>

  )
}