import React from "react";
import styles from "./BookSmarts.module.scss";
import BookSmartCard from "./BookSmartCard";
import cardData from "../../data/bookSmartData";

const BookSmarts = () => {

  const getBookInfo = (cardData) => (
      <BookSmartCard cardData={cardData} />
  )

  return (
    <section className={styles.pageContainer}>
      {cardData.map(getBookInfo)}
    </section>

    // <section>
    //    {cardData.map(getBookInfo)}
    // </section>
  );
};

export default BookSmarts;

