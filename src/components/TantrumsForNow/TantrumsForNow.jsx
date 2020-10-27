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
          <h3>What NOT to do:</h3>
          <ul class="fa-ul">
            <li><i class="fa-li fa fa-times"></i>Yell or spank</li>
            <li>Give in just because they are crying</li>
            <li>Mock or threaten</li>
            <li>Try to reason with your kid or apply logic</li>
          </ul>
      </div>
      <div className={styles.tryThis}>
        <h3>Try this:</h3>
        <ul>
          <li>Take a deep breath and calm down</li>
          <li>Remove your child from a situation, if needed</li>
          <li>Be firm but gentle</li>
          <li>Acknowledge your child's feelings, name them</li>
          <li>Stay calm and consistent</li>
          <li>Wait, then re-engage when they're starting to cool down</li>
        </ul>
      </div>
    </>
  );
};

export default TantrumsForNow;
