import React from "react";
import {upYourGameCardData} from "../../../data/upYourGameData";

const upYourGameCards =() => {

<section>  
{upYourGameCardData.map((upYourGameCardData) => {
   <section className={styles.upYourGameCard}>
     <button>{upYourGameCardData.filterTag}</button>
     <img src={upYourGameCardData.backgroundImage} alt=""/>
     <img src={upYourGameCardData.profileImage} alt= "" />
     <h1>{upYourGameCardData.title}</h1>
     <h2>{upYourGameCardData.subtitle}</h2>
     <p>{upYourGameCardData.author}</p>
     <p>{upYourGameCardData.readTime}</p>
   </section>
 })}
</section>
}
export default upYourGameCards;