import React, { useState } from "react";
import styles from "./ActivityIdeas.module.scss";
import VideoList from "../VideoList";
import ArticleList from "../ArticleList";
import articles from "../../data/articles";
import videos from "../../data/videos";
import { Link } from '@reach/router';

const ActivityIdeas = () => {
  const [toggleList, setToggleList] = useState(true);

    const showClickedList = (toggleList ? <VideoList videos={videos} /> : <ArticleList articles={articles} />)

  return (
  <div className={styles.actIdeasContainer}>

    <div className={styles.btnContainer}>
      <button className={styles.button} onClick={() => setToggleList(true)}>Videos</button>
      <button className={styles.button} onClick={() => setToggleList(false)}>Articles</button>
    </div>

    <div>
      {showClickedList}
    </div>

  </div>
  );
};

export default ActivityIdeas;
