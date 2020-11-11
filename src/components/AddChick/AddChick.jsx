import React, {useState} from 'react';
import {Link} from "@reach/router";
import styles from "./AddChick.module.scss";
import BoyChick from "../../assets/img/AddChick/BoyChick.svg";
import GirlChick from "../../assets/img/AddChick/GirlChick.svg";
import { navigate } from '@reach/router';





const AddChick = () => {
    const [toggleGender, setToggleGender] = useState(false);
    const [chickName, setChickName] = useState("");
    const nameInput = (e) => setChickName(e.target.value);


console.log(chickName);
console.log(toggleGender);




    // const handleNextPage = () => {
    //     navigate("/add-chick-age")
    // }
    return (

        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h2>What is your chick's name?</h2>

            </header>
                <form className={styles.formContainer}>
                    <div className={styles.inputContainer}>
                        <label for="name"></label>
                        <input type="text" onInput={nameInput} placeholder= "Chicks name..."/>
                    </div>
                    <div className={styles.imageContainer}>
                        <button type = "button" onClick={() => setToggleGender(false)}>
                            <img src={GirlChick} alt="Penguin-placeholder-img"/>
                            <p>Girl</p>
                        </button>
                        <button type = "button" onClick={() => setToggleGender(true)}>
                            <img src={BoyChick} alt="Penguin-placeholder-img"/>
                            <p>Boy</p>
                        </button>
                    </div>
                </form>
               
            <button type="submit" className={styles.primaryBtn}>
            <Link to={`/add-chick-age/${chickName}`} >   
                    Next
                </Link>
            </button>
            {/* </form> */}
            {/* <Link to="./AddChickAge"> */}
            {/* <button onClick={handleNextPage} type="submit" className={styles.primaryBtn}>
                Next
                </button> */}
            {/* </Link> */}

        </div>
    
    ); 
}

export default AddChick;
