import React from 'react'
import styles from "./SplashScreen.module.scss"
import splash from "../../assets/styles/img/DadaLogoBlue.svg";


const SplashScreen = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.splash} >
                <img src={splash} alt="splash"/>
                <p>Parenting Coach in Your Pocket</p>
                {/* <div> */}
                    <button className={styles.dadviceBtn}>Get Dadvice</button>
                    <p className={styles.underButtonText}>Already have an account? <span>Log in</span> or <span>Sign up</span></p>
                {/* </div> */}
        </div>
        </div>

    )
}

export default SplashScreen
