import React from "react";
import { upYourGameCardData } from "../../data/upYourGameData";
import { mostDiscussedData } from "../../data/upYourGameData";
import Styles from "./UpYourGame.module.scss";

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
           </section>
              )
        })}

        <h1>Most Discussed</h1>
          {mostDiscussedData.map((MostDiscussedCards) => {
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
