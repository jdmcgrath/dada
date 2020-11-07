import React from 'react'
import styles from "./SplashScreen.module.scss"
import splash from "../../assets/img/DadaLogoBlue.svg";
import { Link } from '@reach/router';


const SplashScreen = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.splash} >
                <img src={splash} alt="splash"/>
                <p>Parenting Coach in Your Pocket</p>
                {/* <div> */}
                    <Link to = "categories">
                    <button className={styles.dadviceBtn}>Get Dadvice</button>
                                        </Link>

                    <p className={styles.underButtonText}>Already have an account? <span>Log in</span> or <Link to ="sign-up"><span>Sign up</span></Link></p>
                {/* </div> */}
        </div>
        </div>

    )
}

export default SplashScreen
