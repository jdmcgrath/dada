import React from "react";
import styles from "./UpYourGame.module.scss";
import { UpYourGameCardData } from "../../data/upYourGameData";


const UpYourGame = () => {
  return (
    
      <section>
        {UpYourGameCardData((card) => {
          return(
            <p>working</p>
          )
        })}
      </section>
      
    
  );
};

export default UpYourGame;
