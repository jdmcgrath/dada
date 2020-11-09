import React from "react";
import styles from "./BookSmarts.module.scss";
import BookSmartCard from "./BookSmartCard";
import BottomNavBar from "../BottomNavBar";
import { useState, useEffect } from 'react';
import { firestore } from "../../firebase";


const BookSmarts = () => {
  const [docs, setDocs] = useState([]);
  const getBookSmarts = () => {
    firestore.collection("booksmarts").get().then((response) => {
      const documents = response.docs.map(d => d.data());
      setDocs(documents)
    })
  }




  
  useEffect (() => {
    getBookSmarts();
  }, [])

  return (
    <>
    <section className={styles.pageContainer}>
      {docs.map((doc) => {
        return <BookSmartCard doc={docs} />
      })}
    </section>
    <BottomNavBar />
    </>
  );
};

export default BookSmarts;

