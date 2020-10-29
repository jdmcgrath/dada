import React from "react";
import styles from "./Article.module.scss";


const Article = (props) => {
  const {Title, ReadTime, Image} = props.article;
  
  return (
    // <Link to={}>
    <div className={styles.artContainer}>
      <div className={styles.artGrid}>
        <h3 className={styles.artTitle}>{Title}</h3>
        <p className={styles.artReadTime}>Read  Time: {ReadTime}</p>
        <img className={styles.artImage} src= {Image} alt=""/>
      </div>
    </div>
    // </Link>
  );
};

export default Article;


// need to figure out how these articles will be read.
// videos will play in the embedded player and can switch to fullscreen and back. articles are to be hosted so need to work out how to access them. additional comonent e.g. ArticleReader?
