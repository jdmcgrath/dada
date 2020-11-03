import React from 'react'
import { useEffect, useState } from 'react';
import Video from '../Video'
import styles from './VideoList.module.scss';

const VideoList = (props) => {

  // props
  const { filterChosen, videos } = props;

  // state
  const [filteredVideos, setFilteredVideos] = useState([]);

  // lifecycle/hooks
  useEffect(() => {
    let filteredVideos = videos;

    // first check if there are no filters... because we don't want to filter when there aren't
    if (filterChosen) {
      // take the videos and filter them if they match the fitlers we have
      filteredVideos = videos.filter(v => v.keywords.indexOf(filterChosen) > -1);
    }

    // we have our filtered videos we love it... lets map these into JSX elements so they print something on the page puuuleaseee.
    const videoElements = filteredVideos.map(video => <Video video={video} />);

    // Update the videos in our state so that the page re-renders....
    setFilteredVideos(videoElements);

  }, [filterChosen, videos]);

  // return
  return (
      <div className={styles.vidListContainer}>
        {filteredVideos}
      </div>
  )
}

export default VideoList
