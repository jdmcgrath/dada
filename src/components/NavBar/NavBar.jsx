import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styles from "./NavBar.module.scss";
import SideBar from '../SideBar/';

const NavBar = () => { 

    const sideBarToggle = document.querySelector("#ellipsesContainer");

    const toggleNav = () => {
        sideBarToggle.className.toggle('toggle');
    }

    return ( 
        <>
            <header className={styles.navWrapper}>
                <nav className={styles.globalNav}>
                    <div className={styles.faContainer}>
                    <FontAwesomeIcon icon={faChevronLeft} className={styles.backButton}/>
                    </div>
                    {/* <p className={styles.pageTitle}>Page Title</p> */}
                    <div className={styles.faContainer} onClick={toggleNav} id="ellipsesContainer">
                        <FontAwesomeIcon icon={faEllipsisV} className={styles.ellipses} />
                        <SideBar />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;