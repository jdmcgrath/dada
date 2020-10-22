import React from 'react';
import styles from "./AddChick.module.scss";
import Input from "../../components/Input";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const addChick = (props) => {
    console.log(props)
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h2>Add Chick</h2>
                <div className={styles.imageContainer}>
                    <img className={styles.circularImg} src="" alt=" " srcset=""/>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </div>      
            </header>
            <form className={styles.formContainer}>
                <label for="name"></label>
                <Input InputData={props.InputData[0]} />
                <label for="gender"></label>
                <Input InputData={props.InputData[1]} />
                <label for="birthdate"></label>
                <input type="date" id="birthdate" placeholder="Date of Birth"></input>
                <button type="submit">Save</button>
            </form>
    </div>
    
    
    ); 
}

export default addChick;