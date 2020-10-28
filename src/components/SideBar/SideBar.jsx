import React from 'react';
import styles from './SideBar.module.scss';

import { Link } from '@reach/router';

import HomeIcon from '../../assets/img/SideBarIcons/Home.svg';
import SOSIcon from '../../assets/img/SideBarIcons/SOS.svg';
import ActivitiesIcon from '../../assets/img/SideBarIcons/Activities.svg';
import BookIcon from '../../assets/img/SideBarIcons/Book.svg';
import WeightsIcon from '../../assets/img/SideBarIcons/Weights.svg';
import CogIcon from '../../assets/img/SideBarIcons/Cog.svg';
import InfoIcon from '../../assets/img/SideBarIcons/Info.svg';
import QuestionIcon from '../../assets/img/SideBarIcons/Question.svg';

const SideBar = () => {
    return (
        <section className={styles.sideBarContainer}>
            <header className={styles.sideBarHeader}>
                <div className={styles.userChickImg}>
                    <img src="" alt="user-chick-image"/>
                </div>
                <div className={styles.chickInfo}>
                    <h3>Alex</h3>
                    <p>3 years 4 months</p>
                </div>
            </header>
            <main className={styles.appPathLinks}>
                <div className={styles.appPathItems}>
                    <Link to="/splash">
                    <div className={styles.pathItems}>
                        <img src={HomeIcon} alt="sidebar-icons"/>
                        <p>Home</p>
                    </div>
                    </Link>
                    <Link to="/categories/sos">
                    <div className={styles.pathItems}>
                        <img src={SOSIcon} alt="sidebar-icons"/>
                        <p>SOS!</p>
                    </div>
                    </Link>
                    <Link to="/categories/activity-ideas">
                    <div className={styles.pathItems}>
                        <img src={ActivitiesIcon} alt="sidebar-icons"/>
                        <p>Activities</p>
                    </div>
                    </Link>
                    <Link to="/book-smarts">
                    <div className={styles.pathItems}>
                        <img src={BookIcon} alt="sidebar-icons"/>
                        <p>Book Smarts</p>
                    </div>
                    </Link>
                    <Link to="/">
                    <div className={styles.pathItems}>
                        <img src={WeightsIcon} alt="sidebar-icons"/>
                        <p>Up Your game</p>
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
