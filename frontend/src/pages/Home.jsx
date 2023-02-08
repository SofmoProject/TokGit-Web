import styles from "./Home.module.css"
import intro from '../assets/image/intro.png'
import Title from '../components/home/Title';
import Button from '../components/btn/Button';
import { useNavigate } from "react-router-dom";
import bubble from "../assets/audio/bubble.mp3"
import { motion } from "framer-motion";

export default function Home() {
    

    const navigate = useNavigate();
    function handleClick(){
      const audio = new Audio(bubble);
      audio.volume = 0.4;
      audio.play();
      navigate('/choice')
    }

  return (
    <>
      {/* <Snow /> */}
      <motion.div className={styles.Home}
      initial={{opacity: 1}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
        <Title />
        <img className={styles.intro} src={intro} alt='intro'/>
        <Button text="Github 계정으로 시작하기" handleClick={handleClick}/>
      </motion.div>
    </>

  )
}