import React from "react";
import styles from "./AddChickAge.module.scss";
import { Link } from '@reach/router';



const AddChickAge = () => {
  return (
    <div className={styles.pageContainer}>
            {/* <header className={styles.header}> */}
                <h2>How old is your chick?</h2>
                             {/* <div className={styles.imageContainer}> */}
                    {/* <img className={styles.circularImg} src="" alt=" " srcset=""/> */}
                    {/* <span class={styles.faIcon}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </span> */}
                {/* </div>       */}
                {/* </header> */}
    </div>
  );
};

export default AddChickAge;
