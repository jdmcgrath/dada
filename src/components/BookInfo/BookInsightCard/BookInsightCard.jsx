import React from 'react';
import styles from './BookInsightCard.module.scss';

const BookInsightCard = (props) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.insightNumber}>
                <p>1</p>
            </div>
            <div className={styles.insightTitle}>
            <p>{props.doc.title}</p>
            </div>        
        </div>
    )
}

export default BookInsightCard;
