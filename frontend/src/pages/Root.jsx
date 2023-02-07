import styles from "./Home.module.css"
import Snow from '../components/home/Snow';
import { Outlet } from "react-router-dom";

export default function Root() {
    



  return (
    <>
      <Snow />
      <p className={styles.modetype}> Red 모드</p>
      <div className={styles.App}>
        <Outlet />
      </div>
    </>

  )
}