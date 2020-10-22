import React from "react";
import styles from "./Categories.module.scss";
import {cardsArr} from "../data/cardData";
import { Link } from "@reach/router";


const Categories = () => {

    return (
        <div className={styles.pageContainer}>
            <header>
                <h1>What are you looking for?</h1>
            </header>
            <div className={styles.catContainer}>
            {cardsArr.map((card) => {
                return (
                    <section className={styles.card}>
                        {/* <a href="https://github.com/nology-tech/dada"> */}
                        <Link to={card.path}>
                            <h2>{card.title}</h2>
                            <img src={card.image} alt="category-alt-text"/>
                            <p>{card.info}</p>
                        </Link>
                        {/* </a> */}
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