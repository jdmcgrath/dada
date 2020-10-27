import React from "react";
import styles from "./TantrumsForNow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons";


const TantrumsForNow = () => {
  return (
  <>
    <div className={styles.whatNotToDo}>
      <div>
      <FontAwesomeIcon icon={faTimes} size="2x" />
        <h4>Yell or spank</h4>
      </div>
      <div>
      <FontAwesomeIcon icon={faTimes} size="2x" />
        <h4>Give in just because they are crying</h4>
      </div>
      <div>
      <FontAwesomeIcon icon={faTimes} size="2x" />
        <h4>Mock or threaten</h4>
      </div>
      <div>
      <FontAwesomeIcon icon={faTimes} size="2x" />
        <h4>Try to reason with your kid or apply logic</h4>
      </div>
    </div>
    <div className={styles.tryThis}>
    <div>
    <FontAwesomeIcon icon={faTimes} size="2x" />
        <h4>Take a deep breath and calm down</h4>
      </div>
      <div>
      <FontAwesomeIcon icon={faTimes} size="2x" />
        <h4>Remove your child from a situation, if needed</h4>
      </div>
      <div>
      <FontAwesomeIcon icon={faTimes} size="2x" />
        <h4>Be firm but gentle</h4>
      </div>
      <div>
      <FontAwesomeIcon icon={faTimes} size="2x" />
        <h4>Acknowledge your child's feelings, name them</h4>
      </div>
      <div>
      <FontAwesomeIcon icon={faTimes} size="2x" />
        <h4>Stay calm and consistent</h4>
      </div>
      <div>
      <FontAwesomeIcon icon={faTimes} size="2x" />
        <h4>Wait, then re-engage when they're starting to cool down</h4>
      </div>

    </div>


  </>
  );
};

export default TantrumsForNow;
