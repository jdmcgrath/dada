import React, {useState} from 'react';
import styles from './BookSmartCard.module.scss';
import { Link } from '@reach/router';
// import BookInfo from "../../BookInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp,
        //  faArrowCircleDown,
         faImage } from "@fortawesome/free-solid-svg-icons";
import BookInfo from "../../BookInfo";


         
const BookSmartCard = (props) => {
    const [count, setCount] = useState(0);

    const { BookId } = props.doc;

    const [displayBookInfo, setDisplayBookInfo] = useState(false);

    // const updateBookInfo = (cardData) => {
    //     // If Link tag is clicked render new component with props that corresponds with its BookId.
    //     // Else return
    //     if (displayBookInfo == true) {
    //         setDisplayBookInfo(<BookInfo cardData={cardData} />)
    //     } else {
    //         return;
    //     }
    // }
    {/* I click on the link tag and want:
                - onClick to set state to be the contents of the article i click on
                - that new state is passed to BookInfo
                - BookInfo renders
    */}
   
    // const reduceCount = () => {
    //     setCount(prevCount => prevCount - 1)
    //   ;
    // }
    const increaseCount = () => {
      setCount(addCount => addCount + 1)
    }

    // const {
    //     Title, 
    //     Author,
    //     publishDate,
    //     BookId
    // } = props.docs;


    // const BookInfoLink = () => {
    //     return (
    //         <BookInfo  />  
    //     ) 
    // }

    return (
        <section className={styles.cardContainer}>
            <div className={styles.bookInfoContainer}>
                <div className={styles.bookSmartInfo}>
                    <h2 className={styles.bookTitle}>{props.doc.Title}</h2>
                    <p className={styles.bookAuthor}>{props.doc.Author}, {props.doc.publishDate}</p>
                </div>
                <div className={styles.bookSmartVotes}>
                    <span onClick={increaseCount} className={styles.voteIcon}><FontAwesomeIcon icon={faArrowCircleUp} /></span>
                    <h5 className={styles.voteCounter}>{count}</h5>
                    {/* <span onClick={reduceCount} className={styles.voteIcon}><FontAwesomeIcon icon={faArrowCircleDown} /></span> */}
                </div> 
            </div> 
            {/* I click on the link tag and want:
                - onClick to set state to be the contents of the article i click on
                - that new state is passed to BookInfo
                - BookInfo renders
            */}
            <Link to={`book-info/${BookId}`} docs={props.docs} >
            <div className={styles.bookSmartImage}>
                <img src={props.doc.Img} alt="book-cover-image" />
            </div>  
            </Link>
        </section>
    )
} 

export default BookSmartCard;

// {cardsArr.map((card) => {
//     return (
//         <section className={styles.card}> 
//             <Link to={card.path}>
//                 <div className={styles.imageTitleContainer}>
//                     <h2>{card.title}</h2>
//                     <img src={card.image} alt="penguin-illustration"/>
//                 </div>
//                 <p className={styles.cardSubHeader}>{card.info}</p>
//             </Link>
//         </section>
//     )
// }