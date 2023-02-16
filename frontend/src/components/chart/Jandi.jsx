import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { useBlueMode } from '../../context/BlueModeContext';
import ReactTooltip from "react-tooltip";

export default function Jandi() {
    
const {blueMode} = useBlueMode();
const [jandicolor, setJandicolor] = useState("red")




useEffect(()=>{
    if (blueMode){
        setJandicolor("#2558ff")
    } else {
        setJandicolor("rgb(255, 52, 52)")
    }

    console.log(blueMode)
})

const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 1;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };




  return (
    
    <GitHubCalendar
	// 깃허브 계정
   username={"Code-hyunwoo"}
	
   labels={{
    totalCount: "Learn how we count contributions",
   }}
   // 좌측 요일 표시
   showWeekdayLabels
//    color={"var(--color-base)"}
   color={jandicolor}
   // 사이즈 조정
   blockSize={15}
   fontSize={17}
   transformData={selectLastHalfYear} 
   hideColorLegend
   hideTotalCount
   hideMonthLabels

  >
   <ReactTooltip html />
   </GitHubCalendar>
   
  )
}