import React, { useState, useEffect } from 'react';
import styles from "./ArticleReader.module.scss";
import BottomNavBar from "../BottomNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { firestore } from "../../firebase";


const ArticleReader = (props) => {

  const [longerContent, setLongerContent] = useState([]);
  const [docs, setDocs] = useState([]);
  const [article, setArticle] = useState({});

  const getArticle = async () => {
    await firestore.collection("activityIdeas").get().then((response) => {
      const documents = response.docs.map(d => d.data())
      setDocs(documents)

    })
  }

  useEffect(() => {
    getArticle();
  }, [])

  useEffect(() => {
    let filteredArticles = docs.filter(a => a.uID == null);
    filteredArticles = filteredArticles.filter(a => a.artID === props.artID);   
    setArticle(filteredArticles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docs])

  useEffect(() => {
    if(article[0]!==undefined){
      setLongerContent(article[0]);
    }
  },[article,longerContent])


  return (
    <>
      <header className={styles.smHeader}>
        <h1>Article Reader</h1>
      </header>



      <main className={styles.pageContainer}>
        <section className={styles.readerContent}>
          <div className={styles.headingContainer}>
            <h2>{longerContent.title}</h2>
            <FontAwesomeIcon icon={faBookmark} className={styles.bookmark} />
          </div>
          <section className={styles.authorSection}>
            <img
              className={styles.readerAuthorImage}
              src={longerContent.authorImage}
              alt=""
            />
            <div className={styles.byLine}>
              <p className={styles.authorName}>
                {longerContent.authorName} | {longerContent.readTime}
              </p>
              <p className={styles.date}>
                {longerContent.date}
              </p>
            </div>
          </section>

        <div className={styles.mainBody}>
         <div dangerouslySetInnerHTML={{__html: longerContent.body}}/>
         </div>

        </section>

        {/* <section className={styles.relatedSection}>
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
          </section> */}

      </main>

      <BottomNavBar />
    </>
  )



}

export default ArticleReader;
