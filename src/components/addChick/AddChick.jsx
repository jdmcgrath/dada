import React from 'react';
import styles from './AddChick.module.scss';
import Input from "../Input/Input";

const addChick = (props) => {
    const {type, id, placeholder, autocomplete} = props.InputData;




    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                    <h1>Add Chick</h1>
                    <img className={styles.circularImg} src="" alt=" " srcset=""/>  
            </header>
            <form className={styles.formContainer}>
                <div className={styles.inputWrapper}>
                    <label for="name"></label>
                    {/* <Input InputData={ InputData }/> */}
                    <input type={type} id={id} placeholder={placeholder} autoCapitalize= {autocomplete}></input>
                    <label for="gender"></label>
                    <input type={type} id={id} placeholder={placeholder} autoCapitalize= {autocomplete}></input>
                    <input type={type} id={id} placeholder={placeholder} autoCapitalize= {autocomplete}></input>
                    <label for="birthdate"></label>
                </div>
            </form>
        {/* </div>  </form>
        </div>  </form> */}
    </div>
    
    
    ); 
}

export default addChick;