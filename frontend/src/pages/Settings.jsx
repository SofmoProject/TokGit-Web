import Nav from "../components/nav/Nav";
import { motion } from "framer-motion";


export default function Settings() {
  
  return (

    <>
    <Nav/>
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        Settings
    </motion.div>
    </>
  )
}