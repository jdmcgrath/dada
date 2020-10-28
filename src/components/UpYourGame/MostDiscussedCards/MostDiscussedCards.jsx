import React from "react";
import { mostDiscussedData } from "../../../data/upYourGameData";

const MostDiscussedCards = () => {
  return(
<section>
          {mostDiscussedData.map((mostDiscussedArticles) => {
            return(
          <section>  
            <h1>{mostDiscussedArticles.title}</h1>
            <p>{mostDiscussedArticles.author}</p>
            <p>{mostDiscussedArticles.readTime}</p>
          </section>
          )})}            
</section> 
   )}

export default MostDiscussedCards;