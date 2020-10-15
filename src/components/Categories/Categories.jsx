import React from "react";
import styles from "./Categories.module.scss";
import cards from "../data/cardData";


const Categories = () => {

    return (
        <div>
            <h1>What are you looking for?</h1>
            
            <div className={styles.catContainer}>
            {cards.map((card) => {
                return (
                    <section className={styles.card}>
                        <a href="">

                        <h2>{card.title}</h2>
                        <img src={card.image}/>
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
