import React from "react";
import styles from "./TantrumsForNow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCircle
} from "@fortawesome/free-solid-svg-icons";


const TantrumsForNow = (props) => {
  return (
    <>
      <div className={styles.whatNotToDo}>
        <h3>What NOT to do:</h3>
        <ul className={styles.whatNotToDoUl}>
          <li>
            <FontAwesomeIcon icon={faTimes} />
            Yell or spank
          </li>
          <li>
            <FontAwesomeIcon icon={faTimes} />
            Give in just because they are crying
          </li>
          <li>
            <FontAwesomeIcon icon={faTimes} />
            Mock or threaten
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCircle}
              size="0.1x"
              className={styles.circle}
            />
            Try to reason with your kid or apply logic
          </li>
        </ul>
      </div>
      <div className={styles.tryThis}>
        <h3>Try this:</h3>
        <ul className={styles.tryThisUl}>
          <li>Take a deep breath and calm down</li>
          <li>Remove your child from a situation, if needed</li>
          <li>Be firm but gentle</li>
          <li>Acknowledge your child's feelings, name them</li>
          <li>Stay calm and consistent</li>
          <li>Wait, then re-engage when they're starting to cool down</li>
        </ul>
      </div>
      <button className={styles.primaryBtn} >Prepare For Next Time</button>
    </>
  );
};

export default TantrumsForNow;
