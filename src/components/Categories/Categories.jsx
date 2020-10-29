import React from "react";
import styles from "./Categories.module.scss";
import {cardsArr} from "../../data/cardData";
import { Link } from "@reach/router";

import Binoculars from "../../assets/img/Binoculars.svg";

const Categories = () => {

    return (
        <>
        <header className={styles.lgHeader}>
            <h1>What are you looking for?</h1>
            <img src={Binoculars} alt="binoculars-img"></img>
        </header>
        <main className={styles.pageContainer}>
            <div className={styles.gridContainer}>
            {cardsArr.map((card) => {
                return (
                    <section className={styles.card}> 
                        <Link to={card.path}>
                            <div className={styles.imageTitleContainer}>
                                <h2>{card.title}</h2>
                                <img src={card.image} alt="penguin-illustration"/>
                            </div>
                            <p className={styles.cardSubHeader}>{card.info}</p>
                        </Link>
                    </section>
                )
            }
        )
        }
            </div>
    </main>
    </>
    );
}

export default Categories;