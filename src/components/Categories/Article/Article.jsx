import React from "react";
import styles from "./Article.module.scss";

const Article = (props) => {
  const {Title, ReadTime, Image} = props.article;
  return (
    <>
      <div className={styles.grid}>
        <h2 className={styles.articleTitle}>{Title}</ h2>
        <p className={styles.articleReadTime}>Read  Time: {ReadTime}</p>
        <img className={styles.articleImg} src= {Image} alt=""/>
      </div>
    </>
  );
};

export default Article;
