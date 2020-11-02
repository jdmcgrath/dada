import React, { useState } from "react";
import styles from './BottomNavBar.module.scss';
import HomeIcon from '../../assets/img/BottomNavBar/HomeIcon.svg';
import ActivitiesIcon from "../../assets/img/BottomNavBar/ActivitiesIcon.svg";
import BookSmartsNavIcon from "../../assets/img/BottomNavBar/BookSmartsNavIcon.svg";
import SOSNavIcon from "../../assets/img/BottomNavBar/SOSNavIcon.svg";
import UYGNavIcon from "../../assets/img/BottomNavBar/UYGNavIcon.svg";
import { Link } from "@reach/router";

const BottomNavBar = () => {
    // When user clicks on screen, navbar will appear. 
    const [navbarVisible, setNavbarVisible] = useState(false);
    


    // const windowClicked = () => {
    //     const body = document.querySelector('body');
    //     body.addEventListener('click', () => {
    //         this.setNavBarVisible(true)
    //     })
    // }




    return(
    <div className={styles.navBarContainer}>
        <Link to="../../categories">
        <div className={styles.iconContainer}>
            <img  src={HomeIcon} alt="" className={styles.navBarIcons}></img>    
        </div>
        </Link>
        <Link to="../activity-ideas">
        <div className={styles.iconContainer}>
            <img src={ActivitiesIcon} alt="" className={styles.navBarIcons}></img>    
        </div>
        </Link>
        <Link to="../sos">
        <div className={styles.iconContainer}>
            <img src={SOSNavIcon} alt="" className={styles.navBarIcons}></img>    
        </div>
        </Link>
        <Link to="../book-smarts">
        <div className={styles.iconContainer}>
            <img src={BookSmartsNavIcon} alt="" className={styles.navBarIcons}></img>    
        </div>
        </Link>
        <Link to="../up-your-game">
        <div className={styles.iconContainer}>
            <img src={UYGNavIcon} alt="" className={styles.navBarIcons}></img>    
        </div>
        </Link>
    </div>
    )

   
}

export default BottomNavBar;