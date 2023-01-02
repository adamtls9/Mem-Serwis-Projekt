import { NavLink } from "react-router-dom";
import styles from "./Navigation__styles.module.css";
import topmemeslogo from "../../assets/topmemeslogo.png"

const Navigation = () => {

  return (
    <div className={styles.header}>
            <img className={styles.logo} src={topmemeslogo} alt="mem" />

      <div className={styles.navbar}>
        <NavLink
          className={styles.link}
          to="/hot"
        >
          TOP!
        </NavLink>
        <NavLink
          className={styles.link}
          to="/regular"
        >
          Home
        </NavLink>
        
      </div>
    </div>
  );
};

export default Navigation;