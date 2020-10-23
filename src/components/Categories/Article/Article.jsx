import React from "react";
import styles from "./Article.module.scss";

const Article = (props) => {
  const {Title, ReadTime, Image} = props.article;
  
  return (
    <div className={styles.articleContainer}>
      <div className={styles.grid}>
        <h3 className={styles.articleTitle}>{Title}</h3>
        <p className={styles.articleReadTime}>Read  Time: {ReadTime}</p>
        <img className={styles.articleImg} src= {Image} alt=""/>
      </div>
    </div>
  );
};

export default Article;
