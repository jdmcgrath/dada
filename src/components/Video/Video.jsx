import React, { useState, useEffect} from "react";
import ReactPlayer from 'react-player';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faSolidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faOpenBookmark } from '@fortawesome/free-regular-svg-icons';
import { firestore } from "../../firebase";

const Video = (props) => {

  const { url, channel, icon, title } = props.doc

  const [isFavourited, setIsFavourited] = useState(false);

  useEffect(() => {
    checkFavourites();
  },[isFavourited])


  //const { user } = props;
  // const {firestore document name } = props;

  const user = {
    name: "Mark",
    uid: "bO8zip06hJM05u5JUe2j98bbs3b2"
  }


  const checkFavourites = async () => { 
    if (user) {
      const docRef = await firestore.collection("activityIdeasVideos").doc(`${user.uid}video1`);
      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log("doc:" + doc);
          setIsFavourited(true);
        }
      });
    }
  }

  const displayBookmarkJSX = () => {
    if (isFavourited) {
      return <FontAwesomeIcon icon={faSolidBookmark} className={styles.vidBookmark} />
    } else {
      return <FontAwesomeIcon icon={faOpenBookmark} className={styles.vidBookmark} />
    }
  }


  return (

    <div className={styles.vidContainer}>
      <div className={styles.vidTopBar}>
        <img src={icon} alt="" className={styles.vidChanIcon} />

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
        {/* check if this article is currently favourited by this user (or if user doesn't exist) */}

       <span>{displayBookmarkJSX()}</span>

      </div>
    </div>
  )
}

export default Video