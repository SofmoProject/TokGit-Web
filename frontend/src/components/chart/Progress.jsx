import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect } from "react";
import { useState } from "react";
import { useBlueMode } from '../../context/BlueModeContext';




export default function Progress() {

    const {blueMode} = useBlueMode();
    const [bgColor, setBgColor] = useState("red")
    const [bgbackColor, setBgbackColor] = useState("#fde6e6")

    useEffect(()=>{

        if (blueMode){
            setBgColor("#2558ff")
            setBgbackColor("#d3d7fd")
        } else{
            setBgColor("red")
            setBgbackColor("#fde6e6")
        }
    },[blueMode])

  return (

    <ProgressBar 
    // customLabel="조금 더 커밋해볼까요?" 
    bgColor={bgColor}
    height="30px"
    baseBgColor={bgbackColor}
    labelAlignment="center"
    labelSize="20px"
    borderRadius="5px"
    completed={60}/>
    
  )
}