import React from "react";
import styles from "./BbookSmarts.module.scss";
import BbookSmartCard from "./BbookSmartCard";
import cardData from "../../data/BbookSmartData";

const BookSmarts = () => {

  
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

export default BbookSmarts;

