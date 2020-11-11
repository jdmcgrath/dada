import React from "react";
import styles from "./Article.module.scss";


const Article = (props) => {
  const {title, readTime, image} = props.doc;
  
  return (
    
    <div className={styles.artContainer}>
    
      <div className={styles.artGrid}>  
        <img className={styles.artImage} src= {image} alt=""/>
        <h3 className={styles.artTitle}>{title}</h3>
        <p className={styles.artReadTime}>Read  Time: {readTime}</p>
      </div>
    </div>
    
  );
};

export default Article;


