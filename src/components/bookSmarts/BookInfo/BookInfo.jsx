import React from 'react';
import styles from './BookInfo.module.scss';
import BookInsightCard from './BookInsightCard';
import cardData from '../data';

const BookInfo = () => {

    const getBookInsight = (cardData) => (
        <BookInsightCard cardData={cardData} />
    )

    return (
        <div className={styles.pageContainer}>
            <section className={styles.bookOverview}>
                <div className={styles.aboutBook}>
                    <div className={styles.bookCover}>
                        <img src="" alt="book-cover"/>
                    </div>
                    <div className={styles.bookContentOverview}>
                        <h2>Playful Parenting</h2>
                        <p className={styles.bookAuthor}>Lawrence J.Cohen, 2015.</p>
                        <p className={styles.bookBlurb}>Playful Parenting is a complete guide to using play to raise confident children.</p>
                    </div>    
                </div>
                <div className={styles.overviewFooter}>
                    <p className={styles.readTime}>Read time: 10 min</p>
                    <p>Insights: 5</p>
                </div>
                <div className={styles.aboutAuthor}>
                    <h3>About the Author</h3>
                    <p>Lawrence J. Cohen Ph.D. is a clinical psychologist specialising in children's play,
                        play therapy and parenting.
                    </p>
                </div>
            </section>
            <section className={styles.keyInsights}>
                <h3>Key Insights</h3>
                <div className={styles.keyInsightCard}>
                    {cardData.map(getBookInsight)}
                </div>
            </section>
        </div>
    )
}

export default BookInfo;
