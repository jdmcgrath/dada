import React, { useEffect } from "react";
import styles from "./SplashScreen.module.scss";
import splash from "../../assets/img/DadaLogoBlue.svg";
import DeviceMockup from "../../assets/img/DeviceMockup.svg";
import { Link } from "@reach/router";
import IdeaPenguin from "../../assets/img/Landing/IdeaPenguin.svg";
import AngryPenguin from "../../assets/img/Landing/AngryPenguin.svg";
import ReadingPenguin from "../../assets/img/Landing/ReadingPenguin.svg";
import LiftingPenguin from "../../assets/img/Landing/LiftingPenguin.svg";

const LandingPage = () => {

  // const getClassNames = () => { 
  //   const classes = {[ styles.needsReversing, styles.svgTextLi ]}.join('')
  //   return classes
  // }
  useEffect(() => {
    getClassNames()
  }, [])



  return (
    <div className={styles.noNav}>
      <div className={styles.splash}>
        <img src={splash} alt="splash" />
        <Link to="login">
          <button className={styles.primaryBtn}>Login</button>
        </Link>
      </div>

      <div className={styles.pageCont}>
        <div className={styles.sloganCont}>
          <h1 className={styles.slogan}>A parenting coach in your pocket</h1>
        </div>
        <img src={DeviceMockup} alt="device"></img>

        <div className={styles.textUndePhoneCont}>
          <h3 className={styles.textUnderPhone}>
            Most parenting resources are built with moms in mind.
          
          </h3>
        </div>
        <h3 className={styles.forDad}>We've created one for you, Dad!</h3>
        <p className={styles.textFathers}>
          We want to empower fathers to parent with confidence and enjoy more
          quality time with their kids.
        </p>
        <Link to="/categories">
          <button className={styles.secondaryBtn}>Get Dadvice</button>
        </Link>
        <h2 className={styles.listTitle}>Here you will find:</h2>
      </div>
      <div className={styles.svgTextList}>
        <ul>
          <li className={styles.svgTextLi}>
            <p>
              <span className={styles.bold}>Low-effort activity ideas</span> to
              suit your mood and budget
            </p>
            <img src={IdeaPenguin} alt="idea penguin" />
          </li>
          <li className={styles.svgTextLi}>
            <img src={AngryPenguin} alt="angry penguin" />
            <p>
              <span className={styles.bold}>Fast and clear answers</span> to
              most common parenting challenges
            </p>
          </li>
          <li className={getClassNames}>
            <p>
              <span className={styles.bold}>Cliff-notes</span> from top-rated
              parenting books{" "}
              <span className={styles.italics}>
                (because who has the time to read the whole thing?)
              </span>
            </p>
            <img src={ReadingPenguin} alt="reading penguin" />
          </li>
          <li className={styles.svgTextLi}>
            <img src={LiftingPenguin} alt="weight-lifting penguin" />
            <p>
              <span className={styles.bold}>Longer reads</span> for the
              SuperDads out there
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.pageCont}>
        <Link to="/sign-up">
          <button className={styles.secondaryBtn}>Sign Up</button>
        </Link>
      </div>
      <div className={styles.bottomTextCont}>
        <div className={styles.bottomCont}>
          <h2 className={styles.bottomText}>Contact Us</h2>
          <h2 className={styles.bottomText}>Privacy</h2>
          <h2 className={styles.bottomText}>Terms</h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
