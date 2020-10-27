import React from "react";
import {mostDiscussedData} from "../../data/upYourGameData";

const mostDiscussedData = () => {
<section>
          {mostDiscussedData.map((mostDiscussedData) => {
          <section>  
            <h1>{mostDiscussedData.title}</h1>
            <p>{mostDiscussedData.author}</p>
            <p>{mostDiscussedData.readTime}</p>
          </section>
          })}            
</section> 
}

export default MostDiscussedCards;