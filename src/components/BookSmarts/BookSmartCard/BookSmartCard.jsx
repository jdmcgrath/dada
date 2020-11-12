import React, {useState} from 'react';
import styles from './BookSmartCard.module.scss';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";




const BookSmartCard = (props) => {
    const [count, setCount] = useState(0);

    console.log(props)

    const { BookId,
            Title, 
            Author,
            publishDate,
            Img } = props.doc;

    const increaseCount = () => {
        setCount(addCount => addCount + 1)
    }

    return (
        
        <section className={styles.cardContainer}>
            <div className={styles.bookInfoContainer}>
                <div className={styles.bookSmartInfo}>
                    <h2 className={styles.bookTitle}>{Title}</h2>
                    <p className={styles.bookAuthor}>{Author}, {publishDate}</p>
                </div>
                <div className={styles.bookSmartVotes}>
                    <span onClick={increaseCount} className={styles.voteIcon}><FontAwesomeIcon icon={faArrowCircleUp} /></span>
                    <h5 className={styles.voteCounter}>{count}</h5>
                    {/* <span onClick={reduceCount} className={styles.voteIcon}><FontAwesomeIcon icon={faArrowCircleDown} /></span> */}
                </div> 
            </div> 
            <Link to={`book-info/${BookId}`} doc={props.doc}>
            <div className={styles.bookSmartImage}>
                <img src={Img} alt="book-cover" />
            </div>  
            </Link>
        </section>
    
    )
} 

export default BookSmartCard;

