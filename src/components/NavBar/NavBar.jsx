import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from "./NavBar.module.scss";
import SideBar from "../SideBar";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { navigate } from '@reach/router';
import firebase from "../../firebase";

const NavBar = (props) => { 
    const [ openSideBar, setOpenSideBar ] = useState(false);

    const handleBackButton = () => {
        if (window.location.pathname === "/categories") {
            return
        } else {
            navigate(-1)     
        }

    }
    const searchAlert = () => {
        alert('Searchbar functionality to be added in a future update')
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
                    <div className={styles.faContainer}>
                        <FontAwesomeIcon icon={faChevronLeft} onClick={handleBackButton} className={styles.backButton}/> 
                    </div>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={handlesSignOut} className={styles.backButton}/>
                    {/* <p className={styles.pageTitle}>Page Title</p> */}
                    <div className={styles.faContainer} id={styles.ellipsesContainer} openSideBar={openSideBar}
                    onClick={() => setOpenSideBar(!openSideBar)}>
                        <FontAwesomeIcon onClick={searchAlert} icon={faSearch} className={styles.ellipses}/>
                        <FontAwesomeIcon 
                            icon={faEllipsisV} 
                            className={styles.ellipses}
                            
                        />
                        <SideBar openSideBar={openSideBar} user={props.user} />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;