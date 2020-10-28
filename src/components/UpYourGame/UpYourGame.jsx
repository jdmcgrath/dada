import React from "react";
import UpYourGameCardData from "../../data/upYourGameData";
// import UpYourGameCards from "./UpYourGameCards";
import MostDiscussedCards from "../../data/upYourGameData";

const UpYourGame = () => {
  return (
    <>
    <h1>Most Discussed</h1>
      <section>  

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
       
      </section>

     
      
<section>
          {MostDiscussedCards.map((MostDiscussedCards) => {
            return(
          <section>  
            <h1>{MostDiscussedCards.title}</h1>
            <p>{MostDiscussedCards.author}</p>
            <p>{MostDiscussedCards.readTime}</p>
          </section>
          )})}            
</section> 
   


    {/* <UpYourGameCards /> */}
    {/* <MostDiscussedCards />      */}
    </>
    
  );
}

export default UpYourGame;
