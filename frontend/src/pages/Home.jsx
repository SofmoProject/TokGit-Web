import styles from "./Home.module.css"
import intro from '../assets/image/intro.png'
import Title from '../components/home/Title';
import Button from '../components/btn/Button';
import { useNavigate } from "react-router-dom";

export default function Home() {
    

    const navigate = useNavigate();
    function handleClick(){
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