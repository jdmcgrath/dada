import React from "react";
import styles from "./SOS.module.scss";
//import SOScardsArr from "../../data/cardData";

import { SOScardsArr } from "../../data/cardData";

import { Link } from "@reach/router";

const SOS = () => { 
    
        return (
            <div className={styles.pageContainer}>
                {/* <header>
                    <h1>SOS</h1>
                </header> */}
                <div className={styles.catContainer}>
                {SOScardsArr.map((card) => {
                    return (
                        <section className={styles.card}>
                            <a href="https://github.com/nology-tech/dada">
                            <Link to={card.path}>
                                <h2>{card.title}</h2>
                                <img src={card.image} alt="sos-category-alt-text"/>
                                <p>{card.info}</p>
                            </Link>
                            </a>
                        </section>
                    )
                }
            )
            }
                </div>
            </div>
        );
    }
    

export default SOS;