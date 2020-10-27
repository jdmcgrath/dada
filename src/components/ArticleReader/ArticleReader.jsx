import React from 'react';
import styles from './ArticleReader.module.scss';
import articles from '../../data/articles';
import { Router } from "@reach/router";


const ArticleReader = (props) => {

  const { Title, Body } = props.article
  
  return (
    
    <div>
      <h1>HEader</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto, voluptatum blanditiis illum beatae incidunt fugit architecto. Unde, est dicta?</p>
    </div>
   
  )
}

export default ArticleReader
