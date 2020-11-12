import React, { useState, useEffect } from 'react';
import styles from './BookInsights.module.scss';
import { Link } from "@reach/router";
const BookInsights = (props) => {

    const [currentBook, setCurrentBook] = useState(0);

    const [currentInsight, setCurrentInsight] = useState(0);
    const [count, setCount] = useState(1);

    useEffect(() => {
        setCurrentBook(props.BookId)
    }, [props.BookId])

    useEffect(() => {
        setCurrentInsight(props.insightID);
    }, [props.insightID]);

    const nextInsight = () =>{ 
        
        if ( count < props.docs[currentBook].KeyInsights.length -1 ){
            return setCount(count + 1);
        } else {
            return (count)
        }
    }

    return (
        <>
        <header className={styles.smHeader}>
            <h1>{props.docs[currentBook].KeyInsights[currentInsight].insightTitle}</h1>
        </header>
        <div className={styles.pageContainer}>
            {/* <h2>{props.docs[currentBook].KeyInsights[currentInsight].insightTitle}</h2> */}
            <p>{props.docs[currentBook].KeyInsights[currentInsight].insightRead}</p>
            <Link to={"../../" + `book-insight/${count}`}>
            <div className={styles.btnContainer}>
                <button className={styles.secondaryBtn} onClick={nextInsight}>Next Highlight</button>
            </div>
            </Link>
        </div>
        </>
    )
}

export default BookInsights;
