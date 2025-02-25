import { Outlet, Link } from "react-router-dom";
import styles from "./Hero.module.css";
import { useSelectedCategory } from "../Context/SelectedCategory";

export default function Hero() {
  const { setSelectedCategory } = useSelectedCategory();

  return (
    <>
   
        <div className={styles.banner}>
          <div className={styles.banner_img}></div>
        </div>
     
   
      <Outlet />
    </>
  );
}
