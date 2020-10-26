import React from 'react';
import ReactPlayer from 'react-player';
import styles from './Video.module.scss';


const Video = (props) => {

  const {url, keyword} = props.video

  return (
    <div className={styles.thumbnailBox}>
      <h3 className={styles.videoTitle}>
        Video Title
        {/* replace with channel name pulled from YouTube api */}
      </h3>
      
      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.reactPlayer}
          url={props.video.url}
          controls='true'
          width='100%'
          height='100%'
          config={{
            youtube: {
              playerVars: { showinfo: 1 }
            },
          }}
        />
      </div>
      <div className={styles.videoTags}>
        <p>
          Tag: {props.video.keyword}
        </p>
        <p>
          Fav Icon
        </p>
      </div>
    </div>
  )
}

export default Video
