import { NavLink } from "react-router-dom";
import styles from "./Navigation__styles.module.css";
import topmemeslogo from "../../assets/topmemeslogo.png"

const Navigation = () => {

  return (
    <div className={styles.header}>
            <img className={styles.logo} src={topmemeslogo} alt="mem" />

      <div className={styles.navbar}>
        <NavLink
          style={({isActive})=>{return {color: isActive ? 'white' : ""}}}
          className={styles.link}
          to="/top"
        >
          TOP!
        </NavLink>
        
        <NavLink
          style={({isActive})=>{return {color: isActive ? 'white' : ""}}}
          className={styles.link}
          to="/home"
        >
          Home
        </NavLink>

        {/* <NavLink
          style={({isActive})=>{return {color: isActive ? 'white' : ""}}}
          className={styles.link}
          to="/form"
        >
          Add yours!
        </NavLink> */}
      </div>
    </div>
  );
};

export default Navigation;