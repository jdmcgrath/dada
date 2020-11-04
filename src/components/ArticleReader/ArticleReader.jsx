import React from "react";
import longerContent from "../../data/articleReaderDummy";
import styles from "./ArticleReader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BottomNavBar from "../BottomNavBar";

const ArticleReader = () => {
  console.log(longerContent);

  // const [bodyText,setBodyText] = useState("");

  longerContent.body = {__html: `${longerContent.body}`};

  return (
    <>
      <header className={styles.smHeader}>
        <h1>Header</h1>
      </header>

  

      <main className={styles.pageContainer}>
        <section className={styles.readerContent}>
          <h2>{longerContent.title}</h2>
          <h3>Subtitle</h3>
          <img
            className={styles.readerAuthorImage}
            src={longerContent.authorImage}
            alt=""
          />

         

          <section className={styles.authorSection}>
           <p>{longerContent.author} | {longerContent.readTime}</p>
          </section>

          <div className={styles.mainBody} dangerouslySetInnerHTML={longerContent.body} />

          <p>
            <FontAwesomeIcon icon={"comment-alt"} />{" "}
          </p>
        </section>
        
      </main>
      <BottomNavBar />
    </>
  )
  }

export default ArticleReader;
