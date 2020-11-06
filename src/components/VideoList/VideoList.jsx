import React from 'react'
import { useEffect, useState } from 'react';
import Video from '../Video'
import styles from './VideoList.module.scss';
import { firestore} from "../../firebase";


const VideoList = (props) => {
  const [docs, setDocs] = useState([]);
  const getVideos = () => {
    firestore.collection("activityIdeasVideos").get().then((response) => {
       const documents = response.docs.map(d => d.data());
       setDocs(documents)
    })
  }
  useEffect (() => {
    getVideos();
  }, [])

  // props
  const { filterChosen} = props;

  // state
  const [filteredVideos, setFilteredVideos] = useState([]);

  // lifecycle/hooks
  useEffect(() => {
    let filteredVideos = docs;

    // first check if there are no filters... because we don't want to filter when there aren't
    if (filterChosen) {
      // take the videos and filter them if they match the fitlers we have
      filteredVideos = docs.filter(v => v.keywords.indexOf(filterChosen) > -1);
    }

    // we have our filtered videos we love it... lets map these into JSX elements so they print something on the page puuuleaseee.
    const videoElements = filteredVideos.map(doc => <Video doc={doc} />);

    // Update the videos in our state so that the page re-renders....
    setFilteredVideos(videoElements);

  }, [filterChosen, docs]);

  // return
  return (
      <div className={styles.vidListContainer}>
        {filteredVideos}
      </div>
  )
}

export default VideoList
