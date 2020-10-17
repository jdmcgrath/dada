import React from "react";
import styles from "./Categories.module.scss";
import cardsArr from "../data/cardData";


const Categories = () => {

    return (
        <div>
            <h1>What are you looking for?</h1>
            
            <div className={styles.catContainer}>
            {cardsArr.map((card) => {
                return (
                    <section className={styles.card}>
                        <a href="https://github.com/nology-tech/dada">
                            <h2>{card.title}</h2>
                            <img src={card.image} alt="an image"/>
                            <p>{card.info}</p>
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

export default Categories;
