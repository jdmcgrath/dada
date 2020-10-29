import React from "react";
import UpYourGameCardData from "../../data/upYourGameData";
import MostDiscussedCards from "../../data/upYourGameData";
import Styles from "./UpYourGame.module.scss";
import NavBar from "../NavBar";

const UpYourGame = () => {
  return (
    <>
    <header className={Styles.smHeader}>
    <h1>Up Your Game</h1>
    </header>

    <main className={Styles.pageContainer}> 

    


      {UpYourGameCardData.map((UpYourGameCardData) => {
        return(
           <section className={Styles.upYourGameArticles}>

            <img className={Styles.articleBackgroundImage} src={UpYourGameCardData.backgroundImage} alt=""/>
            <img className={Styles.articleProfileImage} src={UpYourGameCardData.profileImage} alt= "" />
            <button className={Styles.articleTag}>{UpYourGameCardData.filterTag}</button>
            <h2>{UpYourGameCardData.title}</h2>
            <h3>{UpYourGameCardData.subtitle}</h3>
            <p>{UpYourGameCardData.author} | {UpYourGameCardData.readTime}</p>
           </section>
              )
        })}

        <h1>Most Discussed</h1>
          {MostDiscussedCards.map((MostDiscussedCards) => {
            return(
          <section className={Styles.mostDiscussedCards}>  
            <h1>{MostDiscussedCards.title}</h1>
            <p>{MostDiscussedCards.author}</p>
            <p>{MostDiscussedCards.readTime}</p>
          </section>
          )})}
        </main> 
    </>
  );
}

export default UpYourGame;
