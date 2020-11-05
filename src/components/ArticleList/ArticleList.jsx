import React from 'react';
import { useEffect, useState } from 'react';
import Article from '../Article/Article';
import styles from './ArticleList.module.scss';

const ArticleList = (props) => {

  const { filterChosen, articles } = props;

  // state
  const [filteredArticles, setFilteredArticles] = useState([]);

  // lifecycle/hooks
  useEffect(() => {
    let filteredArticles = articles;

    // first check if there are no filters... because we don't want to filter when there aren't
    if (filterChosen) {
      // take the Articles and filter them if they match the fitlers we have
      filteredArticles = articles.filter(a => a.keywords.indexOf(filterChosen) > -1);
    }

    // we have our filtered Articles we love it... lets map these into JSX elements so they print something on the page puuuleaseee.
    const articleElements = filteredArticles.map(article => <Article article={article} />);

    // Update the Articles in our state so that the page re-renders....
    setFilteredArticles(articleElements);

  }, [filterChosen, articles]);

  // return
  return (
      <div className={styles.articleListContainer}>
        {filteredArticles}
      </div>
  )
}

export default ArticleList

