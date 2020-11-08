import React from "react";
import longerContent from "../../data/articleReaderDummy";
import styles from "./ArticleReader.module.scss";
import BottomNavBar from "../BottomNavBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons'; 


const ArticleReader = () => {

  longerContent.body = { __html: `${longerContent.body}` };

  
   return (
    <>
      <header className={styles.smHeader}>
        <h1>Article Reader</h1>
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

        {/* 1. related articles section - neeeds to map through rekated content and render into grid
        2. what is related content? where are we getting it from?
            2.a assuming it will be articles with same keyword */}

          <section className={styles.relatedSection}>
            <div className={styles.relatedHeading}>
              <h2>
                Related Articles
              </h2>
              <hr/>
            </div>
            <div className={styles.relatedGrid}>
              <div>
                <img className={styles.relatedImage} src="../../img/CategoryPage/ActivityIdeas/parent5.jpg" alt="https://via.placeholder.com/160x120.png"/>
                <h3 className={styles.relatedArticleTitle}>
                Article Title
                </h3>
                <p>
                  Short summary of article
                </p>
                <p>
                  Read time: 3 min
                </p>
              </div>
              
              <div>
                <img className={styles.relatedImage} src="../../img/CategoryPage/ActivityIdeas/parent1.jpg" alt=""/>
                <h3 className={styles.relatedArticleTitle}>
                Article Title
                </h3>
                <p>
                  Short summary of article
                </p>
                <p>
                  Read time: 3 min
                </p>
              </div>
            </div>
          </section>

      </main>

      <BottomNavBar />
    </>
  )
}

export default ArticleReader;
