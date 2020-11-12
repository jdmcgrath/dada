import React from "react";
import styles from "./LandingPage.module.scss";
import splash from "../../assets/img/DadaLogoBlue.svg";
import DeviceMockup from "../../assets/img/DeviceMockup.svg";
import { Link } from "@reach/router";
import IdeaPenguin from "../../assets/img/Landing/IdeaPenguin.svg";
import AngryPenguin from "../../assets/img/Landing/AngryPenguin.svg";
import ReadingPenguin from "../../assets/img/Landing/ReadingPenguin.svg";
import LiftingPenguin from "../../assets/img/Landing/LiftingPenguin.svg";

const LandingPage = () => {
  return (
    <div>
      <div className={styles.splash}>
        <img src={splash} alt="splash" />
        <button>Login</button>
      </div>

      <div className={styles.pageCont}>
        <div className={styles.sloganCont}>
          <h1 className={styles.slogan}>A parenting coach in</h1>
          <h1 className={styles.slogan}>your pocket</h1>
        </div>
        <img src={DeviceMockup} alt="device"></img>

        <div className={styles.textUndePhoneCont}>
          <h3 className={styles.textUnderPhone}>
            Most parenting resources are
          </h3>
          <h3 className={styles.textUnderPhone}>built with moms in mind.</h3>
        </div>
        <h3 className={styles.forDad}>We've created one for you , Dad!</h3>
        <p className={styles.textFathers}>
          We want to empower fathers to parent with confidence and enjoy more
          quality time with
        </p>
        <p>their kids.</p>
        <button className={styles.primaryBtn}>Get Dadvice</button>
        <h2 className={styles.listTitle}>Here you will find:</h2>
      </div>
      <div className={styles.svgTextList}>
        <ul>
          <li className={styles.svgTextLi}>
            <p>Low-effort activity ideas to suit your mood and budget</p>
            <img
              src={IdeaPenguin}
              alt="idea penguin"
            />
          </li>
          <li className={styles.svgTextLi}>
            <img
              src={AngryPenguin}
              alt="angry penguin"
            />
            <p>Fast and clear answers to most common parenting challenges</p>
          </li>
          <li className={styles.svgTextLi}>
            <p>
              Cliff-notes from top-rated parenting books (because who has the
              time to read the whole thing?)
            </p>
            <img
              src={ReadingPenguin}
              alt="reading penguin"
            />
          </li>
          <li className={styles.svgTextLi}>
            <img
              src={LiftingPenguin}
              alt="weight-lifting penguin"
            />
            <p>Longer reads for the SuperDads out there</p>
          </li>
        </ul>
      </div>
      <div className={styles.endOfPage}>
        <button className={styles.primaryBtn}>Sign Up</button>
        <h2 className={styles.endOfPageText}>Contact Us</h2>
        <h2 className={styles.endOfPageText}>Privacy</h2>
        <h2 className={styles.endOfPageText}>Terms</h2>
      </div>

    </div>
  );
};

export default LandingPage;
