import React, { useState, useEffect } from 'react';
import styles from './BookInsights.module.scss';
import BottomNavBar from "../../BottomNavBar";
const BookInsights = (props) => {

    const [currentBook, setCurrentBook] = useState(0);

    const [currentInsight, setCurrentInsight] = useState(0);
    

    useEffect(() => {
        console.log(props.BookId);
        setCurrentBook(props.BookId)
    }, [props.BookId])

    useEffect(() => {
        console.log(props.insightID);
        setCurrentInsight(props.insightID);
    }, [props.insightID]);

console.log(currentBook)
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
        <BottomNavBar />
        </>
    )
}

export default BookInsights;
