import React from 'react';
import styles from './ArticleReader.module.scss';
import articles from '../../data/articles';
import { Router } from "@reach/router";


const ArticleReader = (props) => {

  const { Title, Body } = props.article
  
  return (
    
    <div>
      <h1>{Title}</h1>
      <p>{Body}</p>
    </div>
   
  )
}

export default ArticleReader
