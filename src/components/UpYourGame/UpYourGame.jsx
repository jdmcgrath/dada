import React from "react";
import { upYourGameCardData } from "../../data/upYourGameData";
import { mostDiscussedData } from "../../data/upYourGameData";
import Styles from "./UpYourGame.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BottomNavBar from "../BottomNavBar";


const UpYourGame = () => {
  return (
    <>
    <header className={Styles.smHeader}>
    <h1>Up Your Game</h1>
    </header>

    <main className={Styles.pageContainer}> 

    


      {upYourGameCardData.map((UpYourGameCardData) => {
        return(
           <section className={Styles.upYourGameArticles}>

            <img className={Styles.articleBackgroundImage} src={UpYourGameCardData.backgroundImage} alt=""/>
            <img className={Styles.articleProfileImage} src={UpYourGameCardData.profileImage} alt= "" />
            <button className={Styles.articleTag}>{UpYourGameCardData.filterTag}</button>
            <h2>{UpYourGameCardData.title}</h2>
            <h3>{UpYourGameCardData.subtitle}</h3>
            <p>{UpYourGameCardData.author} | {UpYourGameCardData.readTime}</p>
            <p><FontAwesomeIcon icon={"comment-alt"}/> </p>

           </section>
              )
        })}

        <h2>Most Discussed</h2>
          {mostDiscussedData.map((MostDiscussedCards) => {
            return(
          <section className={Styles.mostDiscussedCards}>  
            <h3>{MostDiscussedCards.title}</h3>
            <span>{MostDiscussedCards.author} | </span>
            <span>{MostDiscussedCards.readTime}</span>
          </section>
          )})}
        </main> 
        <BottomNavBar />
    </>
  );
}

export default UpYourGame;
