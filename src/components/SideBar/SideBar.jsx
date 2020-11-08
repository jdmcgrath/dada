import React from 'react';
import styles from './SideBar.module.scss';

import { Link } from '@reach/router';

import BookmarkIcon from '../../assets/img/SideBarIcons/Bookmark.svg';
import ProfileIcon from '../../assets/img/SideBarIcons/Profile.svg';

import CogIcon from '../../assets/img/SideBarIcons/Cog.svg';
import InfoIcon from '../../assets/img/SideBarIcons/Info.svg';
import QuestionIcon from '../../assets/img/SideBarIcons/Question.svg';

const SideBar = (props) => {

    // const slideMenuInOut = (props) => `transform: ${({ openSideBar }) => openSideBar ? 'translateX(0)' : 'translateX((-100%)'};`

    return (
        <section className={styles.sideBarContainer} openSideBar={`transform: ${({ openSideBar }) => openSideBar ? 'translateX(0)' : 'translateX((-100%)'}`}>
            <div className={styles.buttonContainer}>
                <button className={styles.signUpBtn}>Sign Up</button>
                <button className={styles.loginBtn}>Login</button>
            </div>
            <main className={styles.appPathLinks}>
                <div className={styles.appPathItems}>
                    <Link to="/splash">
                    <div className={styles.pathItems}>
                        <img src={BookmarkIcon} alt="sidebar-icons"/>
                        <p>Favourites</p>
                    </div>
                    </Link>
                    <Link to="/categories/sos">
                    <div className={styles.pathItems}>
                        <img src={ProfileIcon} alt="sidebar-icons"/>
                        <p>Profile</p>
                    </div>
                    </Link>
                </div>
                <div className={styles.appInfoItems}>
                    <div className={styles.infoItems}>
                        <img src={CogIcon} alt="sidebar-icons"/>
                        <p>Settings</p>
                    </div>
                    <div className={styles.infoItems}>
                        <img src={InfoIcon} alt="sidebar-icons"/>
                        <p>About Us</p>
                    </div>
                    <div className={styles.infoItems}>
                        <img src={QuestionIcon} alt="sidebar-icons"/>
                        <p>FAQ</p>
                    </div>
                </div>
            </main>
            <footer className={styles.sideBarFooter}>
                <p>Logout</p>
            </footer>
        </section>
    )
}

export default SideBar;
