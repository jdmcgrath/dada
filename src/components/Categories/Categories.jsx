import React from "react";
import styles from "./Categories.module.scss";
import {cardsArr} from "../../data/cardData";
import { Link } from "@reach/router";


const Categories = () => {

    return (
        <div className={styles.catPageContainer}>
            <header>
                <h1>What are you looking for?</h1>
            </header>
            <div className={styles.catContainer}>
            {cardsArr.map((card) => {
                return (
                    <section className={styles.card}> 
                        <Link to={card.path}>
                            <h2>{card.title}</h2>
                            <img src={card.image} alt=""/>
                            <p>{card.info}</p>
                        </Link>
                    </section>
                )
            }
        )
        }
            </div>
    </div>
    );
}

export default Categories;