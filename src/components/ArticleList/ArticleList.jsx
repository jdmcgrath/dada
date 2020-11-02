import React from 'react';
import Article from '../Article/Article';
import styles from './ArticleList.module.scss';

const ArticleList = (props) => {

  const { filterChosen, articles } = props;

  return (
    <div className={styles.articleListContainer}>



      {articles.map((article) => {
        for (let i = 0; i < article.keywords.length; i++) {
          if (article.keywords[i] === filterChosen || filterChosen === "") {
            return <Article article={article} />
          }else{
            return null
          }
        }
      })}



    </div>

  )
}

export default ArticleList

