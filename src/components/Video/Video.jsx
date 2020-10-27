import React from 'react';
import ReactPlayer from 'react-player';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons'; 



const Video = (props) => {

  const { url, channel, icon, title } = props.video

  return (
  
    <div className={styles.vidListContainer}>
      <div>
        <div className={styles.vidTopBar}>
          <img src={icon} alt="" className={styles.vidChanIcon}/>

          <p className={styles.vidChanText}>
            {channel}
            {/* replace with channel name pulled from YouTube api */}
          </p>
        </div>
          
        <div className={styles.playerWrapper}>
          <ReactPlayer
            className={styles.reactPlayer}
            url={url}
            controls='true'
            width='100%'
            height='100%'
            config={{
              // youtube 'showinfo' property has been deprecated so unable to hide title/channel/icon from video itself
            }}
          />
        </div>

        <div className={styles.vidBottomBar}>
          <p className={styles.vidTitle}>
            {title}
          </p>
          <FontAwesomeIcon icon={faBookmark} className={styles.vidBookmark}/>
        </div>
      </div>
    </div>
  )
}

export default Video
