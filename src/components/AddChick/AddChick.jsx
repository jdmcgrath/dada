import React from 'react';
import styles from "./AddChick.module.scss";
import Input from "../Input";
import InputData from "../../data/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import BoyChick from "../../assets/img/AddChick/BoyChick.svg";
import GirlChick from "../../assets/img/AddChick/GirlChick.svg";
import { Link } from '@reach/router';




const AddChick = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h2>What is your chick's name?</h2>

            </header>
            <form className={styles.formContainer}>
            <div className={styles.inputContainer}>
                    <label for="name"></label>
                    <Input InputData={InputData[0]} />
                    </div>
                    <div className={styles.imageContainer}>
                    <div className={styles.girlImageContainer}>                 
                    <img src={GirlChick} alt="Penguin-placeholder-img"/>
                    <p>Girl</p>
                    </div>  
                    <div className={styles.boyImageContainer}>                 
                    <img src={BoyChick} alt="Penguin-placeholder-img"/>
                    <p>Boy</p>

                    </div>  
                    </div>
            </form>
            {/* <Link to="./AddChickAge"> */}
            <button type="submit" className={styles.primaryBtn}>
                Next
                </button>
            {/* </Link> */}

        </div>
    
    
    ); 
}

export default AddChick;