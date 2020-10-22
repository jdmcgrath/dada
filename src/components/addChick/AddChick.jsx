import React from 'react';
import styles from "./AddChick.module.scss"

const addChick = (props) => {
    return (
        <div className={styles.pageContainer}>
        <header className={styles.header}>
                <h1>Add Chick</h1>
                <img className={styles.circularImg} src="" alt=" " srcset=""/>

                
        </header>
        <form className={styles.formContainer}>
            <label for="name"></label>
            <input type="text" id="name" placeholder="Name"></input>
            <label for="gender"></label>
            <input type="text" id="gender" placeholder="Gender"></input>
            <label for="birthdate"></label>
            <input type="date" id="birthdate" placeholder="Date of Birth"></input>
            <button type="submit">Save</button>
        </form>
    </div>
    ); 
}

export default addChick;