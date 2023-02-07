import styles from './Nav.module.css'
import TokGit from '../../assets/image/TokGit.png'
import Home from '../../assets/image/home.png'
import Calendar from '../../assets/image/calendar.png'
import Rank from '../../assets/image/rank.png'
import Settings from '../../assets/image/settings.png'
import { useNavigate } from "react-router-dom";
import bubble from "../../assets/audio/bubble.mp3"

 export default function Nav() {
  
  const navigate = useNavigate();

  function handleOnclick(e){
    const audio = new Audio(bubble);
    audio.volume = 0.4;
    audio.play();
    const target = e.target.alt
    navigate(`/${target}`)
  }


  return (
    <div className={styles.Nav}>
        <div className={styles.Nav_Left}>
          <img className={styles.logo} src={TokGit} alt="TokGit" />
          TokGit
        </div>
        <div className={styles.Nav_Right}>
          <div className={styles.iconbox}>
            <img className={styles.icon} src={Home} 
            onClick={handleOnclick} alt="main" />
            Home
          </div>
          <div className={styles.iconbox}>
            <img className={styles.icon} src={Calendar} 
            onClick={handleOnclick} alt="calendar" />
            Calendar
          </div>
          <div className={styles.iconbox}>
            <img className={styles.icon} src={Rank} 
            onClick={handleOnclick} alt="rank" />
            Rank
          </div>
          <div className={styles.iconbox}>
            <img className={styles.icon} src={Settings} 
            onClick={handleOnclick} alt="settings" />
          Settings
          </div>
        </div>
    </div>
  )
}

