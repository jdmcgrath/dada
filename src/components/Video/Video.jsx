import React from 'react';
import ReactPlayer from 'react-player';
import styles from './Video.module.scss';


const Video = (props) => {

  const { url, keyword, channel, icon, } = props.video

  return (
    <div className={styles.vidListContainer}>
      <div>
        <img src={props.video.icon} alt="" className={styles.vidIcon/>

        <h3 className={styles.videoChanText}>
          {props.video.channel}
          {/* replace with channel name pulled from YouTube api */}
        </h3>
      </div>
      
      
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
      <div className={styles.vidTitle}>
        <p>
          {props.video.title}
        </p>
        <p>
          Fav Icon
        </p>
      </div>
    </div>
  )
}

export default Video
