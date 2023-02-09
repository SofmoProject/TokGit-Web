import styles from "./Home.module.css"
import Snow from '../components/home/Snow';
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Cookie from "../assets/audio/Cookie.mp3"
import musicON from "../assets/image/musicOn.png"
import musicOFF from "../assets/image/musicOff.png"
import Redflag from '../assets/image/red.png'
import Blueflag from '../assets/image/blue.png'
import { useBlueMode } from '../context/BlueModeContext';

export default function Root() {
    
  const [bgmOn, setbgmOn] = useState(false);
  const [audio, setAudio] = useState(new Audio(Cookie));
  const {blueMode, toggleBlueMode} = useBlueMode();
  

  function BackgroundMusic () {
    if (bgmOn) {
      setbgmOn(false);
      audio.pause();
    } else {
      setbgmOn(true);
      audio.volume = 0.3;
      audio.play();
      audio.loop = true;
    }
  }

  return (
    <>
      <Snow />
        {bgmOn ?(
          <img className={styles.Bgm} src={musicON} alt="musicON"
          onClick={BackgroundMusic}/>
        ): (
          <img className={styles.Bgm} src={musicOFF} alt="musicOFF"
          onClick={BackgroundMusic}/>
        )}
      <div className={styles.flagbox} onClick={toggleBlueMode}>
          {!blueMode && 
            <p className={styles.Flagbox}>
                <img src={Redflag} alt="red" className={styles.Redflag}/>
                Red Mode
            </p>}
          {blueMode && 
            <p className={styles.Flagbox}>
                <img src={Blueflag} alt="blue" className={styles.Redflag}/>
                Blue Mode
            </p>}
      </div>
      <div className={styles.App}>
        <Outlet />
      </div>
    </>

  )
}