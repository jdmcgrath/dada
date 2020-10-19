import React from 'react';
import styles from "./AddChick.module.scss";
import Input from "../Input/Input";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const addChick = (props) => {
    console.log(props.data);
    
    return (
   <div className={styles.pageContainer}>
        <header className={styles.header}>
                <h1>Add Chick</h1>
                <img src="" alt="user-profile-pic" />
                    {/* <FontAwesomeIcon icon="plus-circle" /> */}
        </header>
        <form className={styles.form}>
            <div className={styles.inputWrapper}>
                {/* <input type="text" id="name" placeholder="Name" autocomplete="off"></input> */}
                <Input InputData={props.InputData[0]} />
            </div>
            <div className={styles.inputWrapper}>
                {/* <input type="text" id="gender" placeholder="Gender"></input> */}
                <Input InputData={props.InputData[1]} />
            </div>
            <div className={styles.inputWrapper}>
                {/* <input type="date" id="birthdate" placeholder="Date of Birth"></input> */}
                <Input InputData={props.InputData[2]} />
            </div>
            <button type="submit">Save</button>
        </form>
    </div>
    ); 
}

export default addChick;