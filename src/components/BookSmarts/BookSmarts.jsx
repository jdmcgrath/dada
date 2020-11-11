import React from "react";
import styles from "./BookSmarts.module.scss";
import BookSmartCard from "./BookSmartCard";
import BottomNavBar from "../BottomNavBar";
import {useState, useEffect} from 'react';
// import { firestore } from "../../firebase";


const BookSmarts = (props) => {
//   const [docs, setDocs] = useState([]);
//   const getBookSmarts = () => {
//     firestore.collection("booksmarts").get().then((response) => {
//       const documents = response.docs.map(d => d.data());
//       setDocs(documents)
//     })
//   }
// console.log(docs);



  
  // useEffect (() => {
  //   getBookSmarts();
  // }, [])

  return (
    <>
    <header className={styles.smHeader}>
      <h1>Book Smarts</h1>
    </header>
    <section className={styles.pageContainer}>
      {props.docs.map((doc) => {
        return <BookSmartCard doc={doc} />
      })}
    </section>
    <BottomNavBar />
    </>
  );
};

export default BookSmarts;

