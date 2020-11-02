import React, { useState } from "react";
import styles from "./ActivityIdeas.module.scss";
import VideoList from "../VideoList";
import ArticleList from "../ArticleList";
import articles from "../../data/articles";
import videos from "../../data/videos";

const ActivityIdeas = () => {

  const [filterChosen, setFilterChosen] = useState("");

  const [toggleList, setToggleList] = useState(true);

  const showClickedList = toggleList ?
    <VideoList videos={videos} filterChosen={filterChosen} /> :
    <ArticleList articles={articles} filterChosen={filterChosen} />

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
        <div className={styles.filterTagsContainer}>
          <ul className={styles.filterTags}>
            <li><span onClick={() => setFilterChosen("")} className={styles.filterOn} >ALL</span></li>
            <li><span onClick={() => setFilterChosen("indoor")}>INDOOR</span></li>
            <li><span onClick={() => setFilterChosen("outdoor")}>OUTDOOR</span></li>
            <li><span onClick={() => setFilterChosen("social skills")}>SOCIAL SKILLS</span></li>
            <li><span onClick={() => setFilterChosen("language")}>LANGUAGE</span></li>
            <li><span onClick={() => setFilterChosen("strength")}>STRENGTH</span></li>
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
