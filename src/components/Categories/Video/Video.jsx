import React from 'react';
import ReactPlayer from 'react-player/lazy';
import styles from './Video.module.scss';


const Video = (props) => {

  const {vidID, source, url, keyword} = props.video

  return (
    <div className={styles.thumbnailBox}>
      <h3 className={styles.videoTitle}>
        Video Title
      </h3>
      
      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.reactPlayer}
          url={props.video.url}
          width='100%'
          height='auto'
        />
        <br/><br/>
      </div>
      <div className={styles.videoTags}>
        <p>
          Tag: {props.video.keyword}
        </p>
        <p>
          Fav Icon
        </p>
      </div>
        <br/>
    </div>
  )
}

export default Video
