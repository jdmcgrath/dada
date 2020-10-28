import React from "react";
import {upYourGameCardsData} from "../../../data/upYourGameData";


const UpYourGameCards =() => {
return(
<section>  
{upYourGameCardData.map((upYourGameArticles) => {
   <section className={styles.upYourGameCard}>
     <button>{upYourGameArticles.filterTag}</button>
     <img src={upYourGameArticles.backgroundImage} alt=""/>
     <img src={upYourGameArticles.profileImage} alt= "" />
     <h1>{upYourGameArticles.title}</h1>
     <h2>{upYourGameArticles.subtitle}</h2>
     <p>{upYourGameArticles.author}</p>
     <p>{upYourGameArticles.readTime}</p>
   </section>
 })}
</section>
)}

export default UpYourGameCards;