import React from 'react'
import styles from "./SplashScreen.module.scss"

const SplashScreen = () => {
    return (
        <>
        <div>
            <img src="../../assets/images/dada-splash-large.png" alt=""/>
            <p>Parenting Coach in Your Pocket</p>
        </div>
        <div>
            <button>Get Dadvice</button>
            <p>Already have an account? <span>Log in</span> or <span>Sign up</span></p>
        </div>
        </>
    )
}

export default SplashScreen
