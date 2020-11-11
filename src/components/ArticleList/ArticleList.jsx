import React from 'react';
import { useEffect, useState } from 'react';
import Article from '../Article/Article';
import styles from './ArticleList.module.scss';
import {firestore} from "../../firebase";

const ArticleList = (props) => {
  const [docs, setDocs] = useState([]);

  const getArticles = () => {
    firestore.collection("activityIdeas").get().then((response) => {
       const documents = response.docs.map(d => d.data());
       setDocs(documents) 
    })
  } 
  useEffect (() => {
    getArticles();
  }, [])
  const { filterChosen} = props;

  // state
  const [filteredArticles, setFilteredArticles] = useState([]);

  // lifecycle/hooks
  useEffect(() => {
    let filteredArticles = docs;

    // first check if there are no filters... because we don't want to filter when there aren't
    if (filterChosen) {
      // take the Articles and filter them if they match the fitlers we have
      filteredArticles = docs.filter(a => a.keywords.indexOf(filterChosen) > -1);
    }

    // we have our filtered Articles we love it... lets map these into JSX elements so they print something on the page puuuleaseee.
    const articleElements = filteredArticles.map(doc => <Article doc={doc} />);

    // Update the Articles in our state so that the page re-renders....
    setFilteredArticles(articleElements);

  }, [filterChosen, docs]);

  // return
  return (
      <div className={styles.articleListContainer}>
        {filteredArticles}
      </div>
  )
}

export default ArticleList

