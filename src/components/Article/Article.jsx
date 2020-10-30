import React from "react";
import styles from "./Article.module.scss";


const Article = (props) => {
  const {Title, ReadTime, Image} = props.article;
  
  return (
    
    <div className={styles.artContainer}>
      <div className={styles.artGrid}>
        <h3 className={styles.artTitle}>{Title}</h3>
        <p className={styles.artReadTime}>Read  Time: {ReadTime}</p>
        <img className={styles.artImage} src= {Image} alt=""/>
      </div>
    </div>
    
  );
};

export default Article;


