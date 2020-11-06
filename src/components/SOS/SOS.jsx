import React from "react";
import styles from "./SOS.module.scss";
//import SOScardsArr from "../../data/cardData";

import { SOScardsArr } from "../../data/cardData";

import { Link } from "@reach/router";
import AltBottomNavBar from "../AltBottomNavBar";

const SOS = () => { 
    
        return (
            <>
            <header className={styles.smHeader}>
                <h1>SOS!</h1>
            </header>
            <div className={styles.pageContainer}>
                <div className={styles.gridContainer}>
                {SOScardsArr.map((card) => {
                    return (
                        <section className={styles.card}>
                            <Link to={card.path}>
                                <div className={styles.imageWrapper}>
                                    <h2>{card.title}</h2>
                                    <img src={card.image} alt="sos-category-alt-text"/>
                                </div>
                                {/* <p>{card.info}</p> */}
                            </Link>
                        </section>
                    )
                }
            )
            }
                </div>
            </div>
            <AltBottomNavBar />
            </>
        );
    }
    

export default SOS;