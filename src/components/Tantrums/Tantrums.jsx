import React from "react";
import styles from "./Tantrums.module.scss";

const Tantrums = () => {
  return (
    <div className={styles.pageContainer}>
            {/* Buttons to select whether you wish to info for now or later */}

      <div className={styles.btnContainer}>
      <button className={styles.primaryBtn}>For Now</button>
      <button className={styles.primaryBtn}>For Next Time</button>

      </div>
    </div>
  );
};

export default Tantrums;
