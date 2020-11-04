import React from 'react';
import longerContent from '../../data/articleReaderDummy';



const ArticleReader = () => {

console.log(longerContent);

  return (
    <>

      <header>
      </header>

      <main className={StyleSheet.pageContainer}>
      </main>

      <div>

        <h1>{longerContent[0].Title}</h1>

        <p></p>
    
      </div>

      </>
   
  )
}

export default ArticleReader
