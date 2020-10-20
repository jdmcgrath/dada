import React from 'react';
import Article from '../Article/Article';


const ArticleList = (props) => {
  return (
    <div>
      {props.articles.map((article) => {
        return <Article article={article} />
      })}
    </div>
  )
}

export default ArticleList

