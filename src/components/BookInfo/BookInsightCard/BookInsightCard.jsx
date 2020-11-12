import React from 'react';
import styles from './BookInsightCard.module.scss';

const BookInsightCard = (props) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.insightNumber}>
                <p>{props.doc.insightNumber}</p>
            </div>
            <div className={styles.insightTitle}>
                <p>{props.doc.insightTitle}</p>
            </div>        
        </div>
    )
}

export default BookInsightCard;
