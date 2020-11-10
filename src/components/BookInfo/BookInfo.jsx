import React, { useState, useEffect } from 'react';
import styles from './BookInfo.module.scss';
// import BookInsightCard from './BookInsightCard';
// import cardData from "../../data/bookSmartData";

const BookInfo = (props) => {
    
    const [currentBook, setCurrentBook] = useState(0);
    

    useEffect(() => {
        setCurrentBook(props.docs.BookId);
    }, [])
    console.log(currentBook)
    // const getBookInsight = (cardData) => {
    //     return(
    //         <BookInsightCard cardData={props.cardData[currentBook]} />
    //     )
    // }

    // useEffect to run on load
    // go to firebase and grab that book ()
    // useEffect(() => {
    //     // firestore.collection.doc....
    // }, [])

    // rops.doc[currentBook].Img
 
    // const { Title, Author, publishDate } = props;
    console.log(props);
    return (
        <div className={styles.pageContainer}>
            <section className={styles.bookOverview}>
                <div className={styles.aboutBook}>
                    <div className={styles.bookCover}>
                        <img src="" alt="book-cover"/>
                    </div>
                    <div className={styles.bookContentOverview}>
                        <h2>{props.docs[currentBook].Title}</h2>
                        <p className={styles.bookAuthor}>{props.docs[currentBook].Author}, {props.docs[currentBook].publishDate}.</p>
                        <p className={styles.bookBlurb}>{props.docs[currentBook].Blurb}</p>
                    </div>    
                </div>
                <div className={styles.overviewFooter}>
                    <p className={styles.readTime}>Read Time: {props.docs[currentBook].ReadTime}</p>
                    <p>Insights: 5</p>
                </div>
                <div className={styles.aboutAuthor}>
                    <h3>About Author</h3>
                    <p>{props.docs[currentBook].AuthorBackground}
                    </p>
                </div>
            </section>
            <section className={styles.keyInsights}>
                <h3>Key Insights</h3>
                {/* <div className={styles.keyInsightCard}>
                    {props.cardData.map(getBookInsight)}
                </div> */}
            </section>
        </div>
    )
}

export default BookInfo;

