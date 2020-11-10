import React from 'react'
import { useEffect, useState } from 'react';
import Video from '../Video'
import styles from './VideoList.module.scss';
import { firestore} from "../../firebase";


const VideoList = (props) => {

  const [docs, setDocs] = useState([]);

  const { filterChosen} = props;

  const [filteredVideos, setFilteredVideos] = useState([]);

  const getVideos = async () => {
    console.log("getting videos");
    await firestore.collection("activityIdeasVideos").get().then((response) => {
       const documents = response.docs.map(d => d.data());
       //console.log(response.docs.data);
       setDocs(documents);
    })
  }

  useEffect(() => {

    getVideos();
  },[filterChosen])

  
  useEffect(() => {

       
    console.log("filtering");
    // MB - added filter to remove any copies made when favouriting (where uID exists)
    let filteredVideos = docs.filter(v => v.uID == null);

    // first check if thre are no filter categories selected... because we don't want to filter when there aren't
    if (filterChosen) {
      // take the videos and filter them if they match the fitlers we have     
      filteredVideos = docs.filter(v => v.keywords.indexOf(filterChosen) > -1 );
    }

    // we have our filtered videos... lets map these into JSX elements so they print something on the page
    const videoElements = filteredVideos.map(doc => <Video key={doc.vidID} doc={doc} />);

    // Update the videos in our state so that the page re-renders....
    setFilteredVideos(videoElements);

    console.log("Hello from VIDEO LIST component....")
    console.log(docs)

  }, [filterChosen,docs]);



  // return
  return (
      <div className={styles.vidListContainer}>
        {filteredVideos}
      </div>
  )



}

export default VideoList
