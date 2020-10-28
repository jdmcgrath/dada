import React, { useState } from "react";
import styles from "./Tantrums.module.scss";
import TantrumsForNow from "../TantrumsForNow";
import TantrumsForNextTime from "../TantrumsForNextTime";

const Tantrums = () => {
  const [toggleList, setToggleList] = useState(true);

  const showClickedList = toggleList ? (
    <TantrumsForNow setToggleList={setToggleList}/>
  ) : (
    <TantrumsForNextTime />
  );
  
  
  return (
    <div className={styles.pageContainer} >
            {/* Buttons to select whether you wish to info for now or later */}

      <div className={styles.btnContainer}>
      <button className={styles.primaryBtn} onClick={() => setToggleList(true)}>For Now</button>
      <button className={styles.primaryBtn} onClick={() => setToggleList(false)}>For Next Time</button>

      </div>

      <div>{showClickedList}</div>
    </div>
  );
};

export default Tantrums;
