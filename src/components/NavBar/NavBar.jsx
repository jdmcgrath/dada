import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { navigate } from '@reach/router'
import styles from "./NavBar.module.scss"
import firebase from "../../firebase"

const NavBar = () => { 
    const handleBackButton = () => {
        if (window.location.pathname === "/categories") {
            return
        } else {
            navigate(-1)     
        }

    }
    const searchAlert = () => {
        alert('Still in progress')
    }
    const handlesSignOut = () => {
        firebase.auth().signOut().then(function() {
            navigate("/sign-up")
            alert("You SIGNED OUT!!!")
          }).catch(function(error) {
              alert("error")
          });
    }
    return ( 
        <>
            <header className={styles.navWrapper}>
                <nav className={styles.globalNav}>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={handleBackButton} className={styles.backButton}/>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={handlesSignOut} className={styles.backButton}/>
                    {/* <p className={styles.pageTitle}>Page Title</p> */}
                    <div>
                    <FontAwesomeIcon onClick={searchAlert} icon={faSearch} className={styles.ellipses}/>
                    <FontAwesomeIcon icon={faEllipsisV} className={styles.ellipses}/>
                    </div>


                </nav>
            </header>
        </>
    )
}

export default NavBar;