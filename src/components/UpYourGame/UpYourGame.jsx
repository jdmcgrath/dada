import React from "react";
import UpYourGameCardData from "../../data/upYourGameData";
import MostDiscussedCards from "../../data/upYourGameData";
import Styles from "./UpYourGame.module.scss";
import NavBar from "../NavBar";

const UpYourGame = () => {
  return (
    

    <main className={Styles.pageContainer}> 

      {UpYourGameCardData.map((UpYourGameCardData) => {
        return(
           <section>
            <button>{UpYourGameCardData.filterTag}</button>
            <img src={UpYourGameCardData.backgroundImage} alt=""/>
            <img src={UpYourGameCardData.profileImage} alt= "" />
            <h1>{UpYourGameCardData.title}</h1>
            <h2>{UpYourGameCardData.subtitle}</h2>
            <p>{UpYourGameCardData.author}</p>
            <p>{UpYourGameCardData.readTime}</p>
           </section>
              )
        })}

        <h1>Most Discussed</h1>
          {MostDiscussedCards.map((MostDiscussedCards) => {
            return(
          <section>  
            <h1>{MostDiscussedCards.title}</h1>
            <p>{MostDiscussedCards.author}</p>
            <p>{MostDiscussedCards.readTime}</p>
          </section>
          )})}
        </main> 
    
  );
}

export default UpYourGame;
