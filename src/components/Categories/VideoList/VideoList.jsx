import React from 'react'
import Video from '../Video'
import styles from './VideoList.module.scss';


const VideoList = (props) => {

  return (
  <div>
    <h2 className={styles.videoListHeader}> 
      Video Playlist
    </h2>
   
    <div className={styles.listContainer}>
      {props.videos.map((video) => {
        return (
          <Video video={video} />
        )
      })}
    </div>
  </div>
  )
}

export default VideoList
