import React from 'react'
import Video from '../Video'
import styles from './VideoList.module.scss';

const VideoList = (props) => {

  const { filterChosen, videos } = props;


  return (

      <div className={styles.vidListContainer}>

        {videos.map((video) => {
          for (let i = 0; i < video.keywords.length; i++) {
            if (video.keywords[i] === filterChosen || filterChosen === "") {
              return <Video video={video} />
            }
          }
        })}

      </div>

  )
}

export default VideoList
