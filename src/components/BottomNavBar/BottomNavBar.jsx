import React from "react";
import styles from './BottomNavBar.module.scss';
import { ReactComponent as HomeIcon } from '../../assets/img/BottomNavBar/HomeIcon.svg';
import { ReactComponent as ActivitiesIcon } from "../../assets/img/BottomNavBar/ActivitiesIcon.svg";
import { ReactComponent as BookSmartsNavIcon } from "../../assets/img/BottomNavBar/BookSmartsNavIcon.svg";
import { ReactComponent as SOSNavIcon } from "../../assets/img/BottomNavBar/SOSNavIcon.svg";
import { ReactComponent as UYGNavIcon } from "../../assets/img/BottomNavBar/UYGNavIcon.svg";
import { Link } from "@reach/router";

const BottomNavBar = (props) => {

    return(
    <div className={styles.navBarContainer}>
        <Link to="../../categories">
        <div className={styles.iconContainer}>
            <HomeIcon className={styles.navBarIcons} />
        </div>
        </Link>
        <Link to="../activity-ideas">
        <div className={styles.iconContainer}>
            <ActivitiesIcon className={styles.navBarIcons} />
        </div>
        </Link>
        <Link to="../sos">
        <div className={styles.iconContainer}>
            <SOSNavIcon className={styles.navBarIcons} />
        </div>
        </Link>
        <Link to="../book-smarts">
        <div className={styles.iconContainer}>
            <BookSmartsNavIcon className={styles.navBarIcons} />
        </div>
        </Link>
        <Link to="../up-your-game">
        <div className={styles.iconContainer}>
            <UYGNavIcon className={styles.navBarIcons} />
        </div>
        </Link>
    </div>
    ) 
}

export default BottomNavBar;