import React, { useState } from "react";
import styles from "./Tantrums.module.scss";
import TantrumsForNow from "../TantrumsForNow";
import TantrumsForNextTime from "../TantrumsForNextTime";

const Tantrums = () => {
  const [toggleList, setToggleList] = useState(true);

  const showClickedList = toggleList ? (
    <TantrumsForNow setToggleList={setToggleList} />
  ) : (
    <TantrumsForNextTime />
  );

  return (
    <>
      <header className={styles.smHeader}>
        <h1>Tantrums</h1>
      </header>
      <div className={styles.pageContainer}>
        {/* Buttons to select whether you wish to info for now or later */}

        <div className={styles.btnContainer}>
          <button
            className={styles.primaryBtn}
            onClick={() => setToggleList(true)}
          >
            For Now
          </button>
          <button
            className={styles.primaryBtn}
            onClick={() => setToggleList(false)}
          >
            For Next Time
          </button>
        </div>

        <div>{showClickedList}</div>
      </div>
    </>
  );
};
//what we want to happen 
//depending on state, the button style changes 
//how to link state to styles 
//make seperate stylings and have state change them
// therefore, state must change classnames of the buttons
//how to format: 
// enclose each button in a {}
const conditionalButtons = () => { 
  if(toggleList = true){ 
<button
            className={styles.primaryBtn}
            onClick={() => setToggleList(true)}
          >
            For Now
          </button>  }
}

export default Tantrums;
