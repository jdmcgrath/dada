import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import styles from "./NavBar.module.scss"

const NavBar = () => { 
    return ( 
        <div>
            <nav className={styles.globalNav}>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.backButton}/>
                <p className="pageTitle">Page Title</p>
                <FontAwesomeIcon icon={faEllipsisV} className={styles.ellipses}/>
            </nav>
        </div>
    )
}

export default NavBar;