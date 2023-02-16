import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect } from "react";
import { useState } from "react";
import { useBlueMode } from '../../context/BlueModeContext';
import './Progress.css'



export default function Progress2() {

    const {blueMode} = useBlueMode();
    const [bgColor, setBgColor] = useState("rgb(247, 90, 90)")
    const [bgbackColor, setBgbackColor] = useState("#fde6e6")

    useEffect(()=>{

        if (blueMode){
            setBgColor("#2558ff")
            setBgbackColor("#d3d7fd")
        } else{
            setBgColor("rgb(247, 90, 90)")
            setBgbackColor("#fde6e6")
        }
    },[blueMode])

  return (

    <ProgressBar 
    // customLabel="조금 더 커밋해볼까요?" 
    bgColor="yellow"
    height="30px"
    baseBgColor="white"
    labelAlignment="center"
    labelSize="20px"
    className="exp"
    labelClassName="label_exp"
    borderRadius="5px"

    completed={50}/>
    
  )
}