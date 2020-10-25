import React from "react";
import styles from "./BookSmarts.module.scss";
import BookSmartCard from "./BookSmartCard";
import cardData from "./data"

const bookSmarts = () => {

  const getBookInfo = (cardData) => (
      <BookSmartCard cardData={cardData}/>
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

export default bookSmarts;

