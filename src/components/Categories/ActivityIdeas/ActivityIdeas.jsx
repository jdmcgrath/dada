import React, { useState } from 'react';
import styles from './ActivityIdeas.module.scss';
import VideoList from '../VideoList';
import ArticleList from '../ArticleList';
import articles from '../../data/articles';
import videos from '../../data/videos';




const ActivityIdeas = () => {  


  const [toggleList, setToggleList] = useState(true);

  const showSomething = toggleList ? <VideoList videos={videos} id="videoList" className={styles.videoList} /> : <ArticleList articles={articles} id="articleList" className={styles.articleList} />



  return (
    //   <nav>Top Navbar</nav>
    <div className={styles.activityIdeas}>

    
        <button onClick={() => setToggleList(true)}>Videos</button>
      <button onClick={() => setToggleList(false)}>Articles</button>

    <div className="filter">
      {/* Tabbed buttons to click for filtered lists based on keywords */}
    </div>
      {showSomething}
    </div>
  )
}

export default ActivityIdeas
