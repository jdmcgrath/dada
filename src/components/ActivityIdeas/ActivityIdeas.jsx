import React, { useState } from "react";
import styles from "./ActivityIdeas.module.scss";
import VideoList from "../VideoList";
import ArticleList from "../ArticleList";
import articles from "../../data/articles";
import videos from "../../data/videos";

const ActivityIdeas = () => {
  const [toggleList, setToggleList] = useState(true);
    const showClickedList = toggleList ? 
    <VideoList videos={videos} /> : 
    <ArticleList articles={articles} />
    const showButtons = toggleList ? 
    <>
      <button className={styles.secondaryBtn} onClick={() => setToggleList(true)}>Videos</button>
      <button className={styles.primaryBtn} onClick={() => setToggleList(false)}>Articles</button>
    </> : 
    <>
      <button className={styles.primaryBtn} onClick={() => setToggleList(true)}>Videos</button>
      <button className={styles.secondaryBtn} onClick={() => setToggleList(false)}>Articles</button>
    </>
  return (
  <>
  <div className={styles.smHeader}>
    <h2>Activity Ideas</h2>
  </div>
  <div className={styles.pageContainer}>
    <div className={styles.btnContainer}>
      {showButtons}
    </div>
    {/* filter headings need to go here */}
    <div className={styles.filterTagsContainer}>
       <ul className={styles.filterTags}>
        <li><a href="https://github.com/nology-tech/dada">ALL</a></li>
        <li><a href="https://github.com/nology-tech/dada">INDOOR</a></li>
        <li><a href="https://github.com/nology-tech/dada">OUTDOOR</a></li>
        <li><a href="https://github.com/nology-tech/dada">SOCIAL SKILLS</a></li>
        <li><a href="https://github.com/nology-tech/dada">LANGUAGE</a></li>
        <li><a href="https://github.com/nology-tech/dada">STRENGTH</a></li>
       </ul>
     </div>
    <div >
      {showClickedList}
    </div>

  </div>

  </>
  );
};
export default ActivityIdeas;
