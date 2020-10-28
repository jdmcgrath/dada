import React, { useState } from "react";
import styles from "./ActivityIdeas.module.scss";
import VideoList from "../VideoList";
import ArticleList from "../ArticleList";
import articles from "../../data/articles";
import videos from "../../data/videos";
import { Link } from '@reach/router';

const ActivityIdeas = () => {

  const [toggleList, setToggleList] = useState(true);

    const showClickedList = toggleList ? 
    <VideoList videos={videos} /> : 
    <ArticleList articles={articles} />

    const showButtons = toggleList ? 
    <>
      <button className={styles.activeButton} onClick={() => setToggleList(true)}>Videos</button>
      <button className={styles.inactiveButton} onClick={() => setToggleList(false)}>Articles</button>
    </> : 
    <>
      <button className={styles.inactiveButton} onClick={() => setToggleList(true)}>Videos</button>
      <button className={styles.activeButton} onClick={() => setToggleList(false)}>Articles</button>
    </>

  return (
  <div className={styles.actIdeasContainer}>

    <div className={styles.btnContainer}>
      {showButtons}
    </div>

    {/* filter headings need to go here */}

    <div className={styles.filterTagsContainer}>
       <ul className={styles.filterTags}>
        <li><a href="">ALL</a></li>
        <li><a href="">INDOOR</a></li>
        <li><a href="">OUTDOOR</a></li>
        <li><a href="">SOCIAL SKILLS</a></li>
        <li><a href="">LANGUAGE</a></li>
        <li><a href="">STRENGTH</a></li>
       </ul>
     </div>


    <div >
      {showClickedList}
    </div>

     

  </div>
  );
};

export default ActivityIdeas;
