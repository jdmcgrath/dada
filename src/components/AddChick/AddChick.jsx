import React from 'react';
import styles from "./AddChick.module.scss";
import Input from "../Input";
import InputData from "../../data/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";


const AddChick = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h2>Add Chick</h2>
                <div className={styles.imageContainer}>
                    {/* <img className={styles.circularImg} src="" alt=" " srcset=""/> */}
                    <span class={styles.faIcon}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </span>
                </div>      
            </header>
            <form className={styles.formContainer}>
                <label for="name"></label>
                <Input InputData={InputData[0]} />
                <label for="gender"></label>
                <Input InputData={InputData[1]} />
                <label for="birthdate"></label>
                <input type="date" id="birthdate" placeholder="Date of Birth"></input>
                <button type="submit" className={styles.formBtn}>Save</button>
            </form>
    </div>
    
    
    ); 
}

export default AddChick;