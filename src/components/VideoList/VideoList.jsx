import React from 'react'
import Video from '../Video'
import styles from './VideoList.module.scss';

const VideoList = (props) => {

  return (
  <div>   
    <div className={styles.vidListContainer}>
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
