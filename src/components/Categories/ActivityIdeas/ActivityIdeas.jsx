import React, { useState } from 'react';
import styles from './ActivityIdeas.module.scss';
import VideoList from '../VideoList';
import ArticleList from '../ArticleList';
import articles from '../../data/articles';
import videos from '../../data/videos';




const ActivityIdeas = () => {  


  const [toggleList, setToggleList] = useState(false);

  const setList = () => { 
    setToggleList(!toggleList);
  }


  return (
    //   <nav>Top Navbar</nav>
    <div className={styles.activityIdeas}>
        {/* Buttons to select whether you wish to view a video or article */}
      <button id="videoBtn" onClick={setList}>Videos</button>
  <button id="articleBtn" onClick={setList} >Articles</button>

    <div className="filter">
      {/* Tabbed buttons to click for filtered lists based on keywords */}
    </div>
      <VideoList  videos={videos} id="videoList" className={styles.videoList} toggleList={toggleList}/>
      <ArticleList  articles={articles} id="articleList" className={styles.articleList} toggleList={toggleList}/>
    </div>
  )
}

export default ActivityIdeas
