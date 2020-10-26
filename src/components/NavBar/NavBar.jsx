import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styles from "./NavBar.module.scss"

const NavBar = () => { 
    return ( 
        <>
            <nav className={styles.globalNav}>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.backButton}/>
                {/* <p className={styles.pageTitle}>Page Title</p> */}
                <FontAwesomeIcon icon={faEllipsisV} className={styles.ellipses}/>
            </nav>
        </>
    )
}

export default NavBar;