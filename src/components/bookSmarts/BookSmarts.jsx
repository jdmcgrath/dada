import React, {useState} from "react";
import styles from "./bookSmarts.module.scss";
import BookSmartCard from "./bookSmartCard";
import cardData from "./data"

const bookSmarts = () => {

  const getBookInfo = (bookInfo) => (
    <div key={bookInfo.id}>
       
      <BookSmartCard bookInfo={bookInfo}/>
    </div>
  )

  return (
    <section className={styles.pageContainer}>
      {cardData.map((card) => {
        return <BookSmartCard cardData={card}/>;
      })}
    </section>

    // <section>
    //    {cardData.map(getBookInfo)}
    // </section>
  );
};

export default bookSmarts;
