import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { navigate } from '@reach/router'
import styles from "./NavBar.module.scss"

const NavBar = () => { 
    const handleBackButton = () => {
        if (window.location.pathname === "/categories") {
            return
        } else {
            navigate(-1)     
        }

    }
    return ( 
        <>
            <header className={styles.navWrapper}>
                <nav className={styles.globalNav}>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={handleBackButton} className={styles.backButton}/>
                    {/* <p className={styles.pageTitle}>Page Title</p> */}
                    <FontAwesomeIcon icon={faEllipsisV} className={styles.ellipses}/>
                </nav>
            </header>
        </>
    )
}

export default NavBar;