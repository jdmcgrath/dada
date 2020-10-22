import React from 'react'
import styles from "./SplashScreen.module.scss"
import splash from "../../assets/images/dada-splash-large.png"


const SplashScreen = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.splash} >
                <img src={splash} alt="splash"/>
                <p>Parenting Coach in Your Pocket</p>
                {/* <div> */}
                    <button>Get Dadvice</button>
                    <p>Already have an account? <span>Log in</span> or <span>Sign up</span></p>
                {/* </div> */}
        </div>
        </div>

    )
}

export default SplashScreen
