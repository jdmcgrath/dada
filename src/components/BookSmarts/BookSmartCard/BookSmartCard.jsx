import React, {useState} from 'react';
import styles from './BookSmartCard.module.scss';
import { Link } from '@reach/router';
import BookInfo from "../../BookInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp, faArrowCircleDown, faImage } from "@fortawesome/free-solid-svg-icons";



         
const BookSmartCard = (props) => {
    const [count, setCount] = useState(0);

    const { BookId } = props.doc;

    const increaseCount = () => {
      setCount(addCount => addCount + 1)
    }
    <BookInfo doc={props.doc} />
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
            <Link to={`book-info/${BookId}`} >
            <div className={styles.bookSmartImage}>
                <img src={props.doc.Img} alt="book-cover-image" />
            </div>  
            </Link>
        </section>
    )
} 

export default BookSmartCard;

