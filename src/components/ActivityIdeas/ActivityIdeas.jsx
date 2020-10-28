import React, { useState } from "react";
import styles from "./ActivityIdeas.module.scss";
import VideoList from "../VideoList";
import ArticleList from "../ArticleList";
import articles from "../../data/articles";
import videos from "../../data/videos";
import { Link } from '@reach/router';

const ActivityIdeas = () => {
  const [toggleList, setToggleList] = useState(true);

    const showClickedList = toggleList ? <VideoList videos={videos} /> : <ArticleList articles={articles} />

    // const buttonStyle = toggleList ? styles.activeButton : styles.inactiveButton;
    
    // const showButtons = () => {

    //   if (toggleList) {
    //     return (
    //       <>
    //         <button className={styles.activeButton} onClick={() => setToggleList(true)}>Videos</button>
    //         <button className={styles.inactiveButton} onClick={() => setToggleList(false)}>Articles</button>
    //       </>
    //     )
    //   } else {
    //     return (
    //       <>
    //         <button className={styles.inactiveButton} onClick={() => setToggleList(true)}>Videos</button>
    //         <button className={styles.activeButton} onClick={() => setToggleList(false)}>Articles</button>
    //       </>
    //     )
    //   }
  
    // }

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

    <div >
      {showClickedList}
    </div>

  </div>
  );
};

export default ActivityIdeas;
