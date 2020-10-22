import React, {useState} from "react";
import styles from "./bookSmarts.module.scss";
import BookSmartCard from "./bookSmartCard";
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
