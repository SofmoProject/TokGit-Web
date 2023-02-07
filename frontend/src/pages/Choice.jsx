import { useState } from 'react'
import rabbit from '../assets/image/rabbit2.png'
import Button from '../components/btn/Button'
import styles from './Choice.module.css'
import { useBlueMode } from '../context/BlueModeContext';
import Check_R from "../assets/image/Check_Red.png"
import Check_B from "../assets/image/Check_Blue.png"
import bubble from "../assets/audio/bubble.mp3"
import { useNavigate } from "react-router-dom";

export default function Choice() {

    const [pet, setPet] = useState("");
    const {blueMode} = useBlueMode();
    const navigate = useNavigate();
  
    function handleClick(e){
      const choiced = e.target.alt
      const audio = new Audio(bubble);
      audio.volume = 0.4;
      audio.play();

      if (pet === choiced){
        setPet("") }
        else{
          setPet(choiced)
        }
      }
    

    function handlebtn(){
      const audio = new Audio(bubble);
      audio.volume = 0.4;
      audio.play();
      navigate('/main')
    }

    return (
      <>
        <div className={styles.choice_title}>
            당신의 토끼를 선택하세요.
        </div>
        <div className={styles.rabbit_box}>
          <div >
            <img className={styles.rabbit} src={rabbit} 
            onClick={handleClick} alt="rabbit1" />
            {pet==="rabbit1" & blueMode ?
            <img className={styles.check1} src={Check_B} alt="CR"/>: <></>}
            {pet==="rabbit1" & !blueMode ?
            <img className={styles.check1} src={Check_R} alt="CR"/>: <></>}
          </div>
          <div>
            <img className={styles.rabbit} src={rabbit} 
            onClick={handleClick} alt="rabbit2" />
            {pet==="rabbit2" & blueMode ?
            <img className={styles.check2} src={Check_B} alt="CR"/>: <></>}
            {pet==="rabbit2" & !blueMode ?
            <img className={styles.check2} src={Check_R} alt="CR"/>: <></>}
          </div>
          <div>
            <img className={styles.rabbit} src={rabbit} 
            onClick={handleClick} alt="rabbit3" />
            {pet==="rabbit3" & blueMode ?
            <img className={styles.check3} src={Check_B} alt="CR"/>: <></>}
            {pet==="rabbit3" & !blueMode ?
            <img className={styles.check3} src={Check_R} alt="CR"/>: <></>}
          </div>
        </div>
        <div className={styles.choice_box}>
          <Button text="이름 설정"/>
          <Button text="선택 완료" handleClick={handlebtn}/>
        </div>
      </>
  
    )
  }