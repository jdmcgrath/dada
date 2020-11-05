import React from "react";
import longerContent from "../../data/articleReaderDummy";
import styles from "./ArticleReader.module.scss";
import BottomNavBar from "../BottomNavBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons'; 


const ArticleReader = () => {
  console.log(longerContent);

  longerContent.body = { __html: `${longerContent.body}` };

  
   return (
    <>
      <header className={styles.smHeader}>
        <h1>Header</h1>
      </header>

      

      <main className={styles.pageContainer}>
        <section className={styles.readerContent}>
          <div className={styles.headingContainer}>
          <h2>{longerContent.title}</h2>
          <FontAwesomeIcon icon={faBookmark} className={styles.bookmark}/>
          </div>
          <section className={styles.authorSection}>
            <img
              className={styles.readerAuthorImage}
              src={longerContent.authorImage}
              alt=""
            />
            <div className={styles.byLine}>
              <p className={styles.authorName}>
                {longerContent.author} | {longerContent.readTime}
              </p>
              <p className={styles.date}>
                {longerContent.date}
              </p>
            </div>
          </section>

          <div className={styles.mainBody} dangerouslySetInnerHTML={longerContent.body} />

        </section>

      </main>

      // bottom of page
      // favourite icon
      // button to close article reader?



      <BottomNavBar />
    </>
  )
}

export default ArticleReader;
