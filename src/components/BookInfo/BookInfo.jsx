import React, { useState, useEffect } from 'react';
import styles from './BookInfo.module.scss';
import BookInsightCard from './BookInsightCard';
import BookmarkIcon from "../../assets/img/BookSmarts/Bookmark.svg";
const BookInfo = (props) => {
    
    const [currentBook, setCurrentBook] = useState(0);
    

    useEffect(() => {
        console.log(props.BookId);
        setCurrentBook(props.BookId)
    }, [])

    console.log(props.docs[currentBook].Title);
    

    return (
        <>
        <header className={styles.smHeader}>
            <h1>{props.docs[currentBook].Title}</h1>
        </header>
        <div className={styles.pageContainer}>
            <section className={styles.bookOverview}>
                <div className={styles.aboutBook}>

                    <div className={styles.bookCover}>
                        <img src={props.docs[currentBook].Img} alt="book-cover"/>
                    </div>

                    <div className={styles.bookContentOverview}>
                        <h2>{props.docs[currentBook].Title}</h2>
                        <p className={styles.bookAuthor}>{props.docs[currentBook].Author}, {props.docs[currentBook].publishDate}</p>
                    </div>   
                    <p className={styles.bookBlurb}>{props.docs[currentBook].Blurb}</p> 
                </div>
                <div className={styles.overviewFooter}>
                    <p className={styles.readTime}>Read Time: {props.docs[currentBook].ReadTime}</p>
                    <img src={BookmarkIcon} alt="Bookmark Icon"/>
                </div>
                <div className={styles.aboutAuthor}>
                    <h3>About Author</h3>
                    <p>{props.docs[currentBook].AuthorBackground}
                    </p>
                </div>
            </section>
            <section className={styles.keyInsights}>
                <h3>Key Insights</h3>
                 <div className={styles.keyInsightCard}>
                    {props.docs.map((doc)=>{
                        return <BookInsightCard  doc={doc}/>
                    })}
                </div> 
            </section>
        </div>
        </>
    )
}

export default BookInfo;
