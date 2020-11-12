import React, { useState, useEffect } from 'react';
import styles from './BookInsights.module.scss';
const BookInsights = (props) => {

    const [currentBook, setCurrentBook] = useState(0);

    const [currentInsight, setCurrentInsight] = useState(0);
    

    useEffect(() => {
        setCurrentBook(props.BookId)
    }, [props.BookId])

    useEffect(() => {
        setCurrentInsight(props.insightID);
    }, [props.insightID]);

console.log(props.docs[currentBook].KeyInsights[currentInsight].insightTitle);

    return (
        <>
        <header className={styles.smHeader}>
            <h1>{props.docs[currentBook].KeyInsights[currentInsight].insightTitle}</h1>
        </header>
        <div className={styles.pageContainer}>
            {/* <h2>{props.docs[currentBook].KeyInsights[currentInsight].insightTitle}</h2> */}
            <p>{props.docs[currentBook].KeyInsights[currentInsight].insightRead}</p>
            <div className={styles.btnContainer}>
                <button className={styles.secondaryBtn}>Next Highlight</button>
            </div>
        </div>
        
        </>
    )
}

export default BookInsights;
