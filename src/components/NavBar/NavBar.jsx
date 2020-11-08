import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styles from "./NavBar.module.scss";
import SideBar from '../SideBar/';

const NavBar = ({ openSideBar, setOpenSideBar}) => { 

    // const sideBarToggle = document.querySelector("#ellipsesContainer");

    // const menuToggler = () => {
    //     if (!openSideBar) {
    //         setOpenSideBar(true);
    //     } else {
    //         setOpenSideBar(false);
    //     }
    // }

    return ( 
        <>
            <header className={styles.navWrapper}>
                <nav className={styles.globalNav}>
                    <div className={styles.faContainer}>
                    <FontAwesomeIcon icon={faChevronLeft} className={styles.backButton}/>
                    </div>
                    {/* <p className={styles.pageTitle}>Page Title</p> */}
                    <div className={styles.faContainer} id={styles.ellipsesContainer}>
                        <FontAwesomeIcon 
                            icon={faEllipsisV} 
                            className={styles.ellipses}
                            openSideBar={openSideBar}
                            onClick={() => setOpenSideBar(!openSideBar)}
                        />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;