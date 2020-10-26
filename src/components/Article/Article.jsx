import React from "react";
import styles from "./Article.module.scss";

const Article = (props) => {
  const {Title, ReadTime, Image} = props.article;
  
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleGrid}>
        <h3 className={styles.articleTitle}>{Title}</h3>
        <p className={styles.articleReadTime}>Read  Time: {ReadTime}</p>
        <img className={styles.articleImg} src= {Image} alt=""/>
      </div>
    </div>
  );
};

export default Article;


// need to figure out how these articles will be read.
// videos will play in the embedded player and can switch to fullscreen and back, but the articles will presumably be from external sites?? need to find this out.
