import React from 'react';
import ReactPlayer from 'react-player';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons'; 



const Video = (props) => {

  const { url, keyword, channel, icon, } = props.video

  return (
  
    <div className={styles.vidListContainer}>

      <div className={styles.vidTopBar}>
        <img src={props.video.icon} alt="" className={styles.vidChanIcon}/>

        <p className={styles.vidChanText}>
          {props.video.channel}
          {/* replace with channel name pulled from YouTube api */}
        </p>
      </div>
        
      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.reactPlayer}
          url={props.video.url}
          controls='true'
          width='100%'
          height='100%'
          config={{
            // youtube 'showinfo' property has been deprecated
          }}
        />
      </div>
      <div className={styles.vidTitle}>
        <p>
          {props.video.title}
        </p>
        <FontAwesomeIcon icon={faBookmark} />
      </div>
    </div>
  )
}

export default Video
