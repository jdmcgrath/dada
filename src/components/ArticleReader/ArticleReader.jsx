import React from "react";
import longerContent from "../../data/articleReaderDummy";

const ArticleReader = () => {
  console.log(longerContent);

  return (
    <>
      <header className={styles.smHeader}>
        <h1>Header</h1>
      </header>

      <main className={styles.pageContainer}>
        <section className={styles.readerContent}>
          <h2>{longerContent.title}</h2>

          <img
            className={styles.readerAuthorImage}
            src={longerContent.authorImage}
            alt=""
          />

          <h3>Subtitle</h3>

          <p>
            {longerContent.author} | {longerContent.readTime}
          </p>

          {longerContent.body}

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
