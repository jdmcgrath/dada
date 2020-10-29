import React from 'react';
import Article from '../Article/Article';
import styles from './ArticleList.module.scss';

const ArticleList = (props) => {

  return (
    <div className={styles.articleListContainer}>
      {props.articles.map((article) => {
        return <Article article={article} />
      })}
    </div>
  )
}

export default ArticleList

