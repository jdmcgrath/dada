import React from "react";
import styles from "./BookSmarts.module.scss";
import BookSmartCard from "./BookSmartCard";
import cardData from "../../data/bookSmartData";
import BottomNavBar from "../BottomNavBar";

const BookSmarts = () => {

  
  const getBookInfo = (cardData) => (
      <BookSmartCard cardData={cardData} />
  )

  return (
    <>
    <section className={styles.pageContainer}>
      {cardData.map(getBookInfo)}
    </section>
    <BottomNavBar />
    </>
  );
};

export default BookSmarts;

