import React, {useState, useEffect} from 'react';
import styles from './BookInfo.module.scss';
// import BookInsightCard from './BookInsightCard';
// import cardData from "../../data/bookSmartData";

const BookInfo = (props) => {
    console.log(props.BookId);
    const [currentBook, setCurrentBook] = useState(0);


    useEffect(() => {
        setCurrentBook(props.BookId);
    }, [])

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
 
    const { Title, Author, publishDate } = props;
    console.log(props);
    return (
        <div className={styles.pageContainer}>
            <section className={styles.bookOverview}>
                <div className={styles.aboutBook}>
                    <div className={styles.bookCover}>
                        <img src="" alt="book-cover"/>
                    </div>
                    <div className={styles.bookContentOverview}>
                        <h2>{props.cardData[currentBook].Title}</h2>
                        <p className={styles.bookAuthor}>{props.cardData[currentBook].Author}, {props.cardData[currentBook].publishDate}.</p>
                        <p className={styles.bookBlurb}>{props.cardData[currentBook].Blurb}</p>
                    </div>    
                </div>
                <div className={styles.overviewFooter}>
                    <p className={styles.readTime}>Read Time: {props.cardData[currentBook].ReadTime}</p>
                    <p>Insights: 5</p>
                </div>
                <div className={styles.aboutAuthor}>
                    <h3>About Author</h3>
                    <p>{props.cardData[currentBook].AuthorBackground}
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


// { 
//     BookId: "0",
//     Title: "Playful Parenting" ,   
//     Author: "Lawrence J.Cohen",
//     AuthorBackground: "Lawrence J.Cohen Ph.D is a clinical psychologist specialising in children's play, therapy and parenting.",
//     publishDate: "2015",
//     Votes: "",
//     Img: "lorem source",
//     ReadTime: "10 mins",
//     KeyInsights: [
//         {
//             insightNumber: "1",
//             insightTitle: "The Value of Being a Playful Parent",
//             insightRead: ""
//         },
//         {
//             insightNumber: "2",
//             insightTitle: "Why Children Play",
//             insightRead: ""
//         },
//         {
//             insightNumber: "3",
//             insightTitle: "Play to Build Confidence",
//             insightRead: ""
//         },
//         {
//             insightNumber: "4",
//             insightTitle: "What If I'm Not a Playful Parent",
//             insightRead: ""
//         },
//         {
//             insightNumber: "5",
//             insightTitle: "The Value of Being a Playful Parent",
//             insightRead: ""
//         },
//     ]
