import styles from "./Home.module.css"
import intro from '../assets/image/intro.png'
import Title from '../components/home/Title';
import Button from '../components/btn/Button';
import { useNavigate } from "react-router-dom";
import bubble from "../assets/audio/bubble.mp3"

export default function Home() {
    

    const navigate = useNavigate();
    function handleClick(){
      const audio = new Audio(bubble);
      audio.volume = 0.3;
      audio.play();
      navigate('/choice')
    }

  return (
    <>
      {/* <Snow /> */}
      <div className={styles.Home}>
        <Title />
        <img className={styles.intro} src={intro} alt='intro'/>
        <Button text="Github 계정으로 시작하기" handleClick={handleClick}/>
      </div>
    </>

  )
}