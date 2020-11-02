import React, { useState } from "react";
import styles from './BottomNavBar.module.scss';
import { ReactComponent as HomeIcon } from '../../assets/img/BottomNavBar/HomeIcon.svg';
import { ReactComponent as ActivitiesIcon } from "../../assets/img/BottomNavBar/ActivitiesIcon.svg";
import { ReactComponent as BookSmartsNavIcon } from "../../assets/img/BottomNavBar/BookSmartsNavIcon.svg";
import { ReactComponent as SOSNavIcon } from "../../assets/img/BottomNavBar/SOSNavIcon.svg";
import { ReactComponent as UYGNavIcon } from "../../assets/img/BottomNavBar/UYGNavIcon.svg";
import { Link } from "@reach/router";

const BottomNavBar = (props) => {
    // When user clicks on screen, navbar will appear. 
    const [navbarVisible, setNavbarVisible] = useState(false);
    
    const MenuIcon = (props) =>(
        <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} className={props.class}></svg>
        )

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
            <HomeIcon className={styles.navBarIcons} />
            {/* <img  src={HomeIcon} alt="" className={styles.navBarIcons}></img>     */}
        </div>
        </Link>
        <Link to="../activity-ideas">
        <div className={styles.iconContainer}>
            <ActivitiesIcon className={styles.navBarIcons} />
            {/* <img src={ActivitiesIcon} alt="" className={styles.navBarIcons}></img>     */}
        </div>
        </Link>
        <Link to="../sos">
        <div className={styles.iconContainer}>
            <SOSNavIcon className={styles.navBarIcons} />
            {/* <img src={SOSNavIcon} alt="" className={styles.navBarIcons}></img>     */}
        </div>
        </Link>
        <Link to="../book-smarts">
        <div className={styles.iconContainer}>
            <BookSmartsNavIcon className={styles.navBarIcons} />
            {/* <img src={BookSmartsNavIcon} alt="" className={styles.navBarIcons}></img>     */}
        </div>
        </Link>
        <Link to="../up-your-game">
        <div className={styles.iconContainer}>
            <UYGNavIcon className={styles.navBarIcons} />
            {/* <img src={UYGNavIcon} alt="" className={styles.navBarIcons}></img>     */}
        </div>
        </Link>
    </div>
    )

   
}

export default BottomNavBar;