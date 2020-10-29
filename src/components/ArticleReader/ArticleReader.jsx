import React from 'react';



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
