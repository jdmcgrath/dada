import React from 'react'
import styles from "./LandingPage.module.scss"
import splash from "../../assets/img/DadaLogoBlue.svg";
import trailingBabies from "../../assets/img/Trailing-Babies.svg";
import { Link } from '@reach/router';

const LandingPage = () => {


    return (
        <div>
               
            <div className={styles.splash} >
                <img src={splash} alt="splash"/>
                <p>Parenting Coach in Your Pocket</p>
                    <Link to = "categories">
                    <button className={styles.dadviceBtn}>Get Dadvice</button>
                    </Link>
                    <p className={styles.underButtonText}>Already have an account? <span>Log in</span> or <Link to ="sign-up"><span>Sign up</span></Link></p>
                </div>
               
            <div className={styles.textUnderSplash}> 
                <p>Most parenting resources are built with moms in mind.</p>
                <p>We’ve created one for you, dad! </p>
            </div>
            <div className={styles.textBeforeTrailing}>
                <p>Our mission is to empower busy fathers to parent with confidence and enjoy more quality time with their kids.</p>
            </div>
            <img src={trailingBabies}/>
            <h2>Here you will find:</h2>
            <ul> 
                <li><p>Fast and clear answers to most common parenting challenges</p></li>
                <li><p>Low-effort activity ideas to suit your mood and budget</p></li>
                <li><p>Cliff-notes from top-rated parenting books (because who has the time to read the whole thing?)</p></li>
                <li><p>Longer reads for the wait-but-why dads out there</p></li>
            </ul>
            <div>
                <Link to="sign-up">
                <button>Sign Up</button>
                </Link>
                <p className={styles.logIn}>Already have an account? <span><a href="https://github.com/nology-tech/dada">Login</a></span></p>
                <p className={styles.orSignIn}>or sign in with</p>
            </div>

           

        </div>
    )
}

export default LandingPage
