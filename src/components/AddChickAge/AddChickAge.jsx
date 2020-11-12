import React, { useState, useEffect} from "react";
import styles from "./AddChickAge.module.scss";
import GirlChick from "../../assets/img/AddChick/GirlChick.svg";
import BoyChick from "../../assets/img/AddChick/BoyChick.svg";
import { navigate } from "@reach/router";
import BottomNavBar from '../BottomNavBar/BottomNavBar';



const AddChickAge = (props) => {
  const [currentName, setCurrentName] = useState("");
  const [ chickAge, setChickAge ] = useState(0);
  const [gender, setGender] = useState();
  
  const {chickName, toggleGender} = props;
  console.log(toggleGender);

  // const [gender, setGender] = useState(false);
  useEffect(() => {
    setCurrentName(chickName);
    setGender(toggleGender);
}, [chickName, toggleGender])

 



  const increaseAge = () => {
    setChickAge(chickAge => chickAge + 1);
  }

  const decreaseAge = () => {
    if(chickAge>0){
      setChickAge(chickAge => chickAge - 1);
    } 
  }
 const handleNextPageSplash = () => {
   navigate("/categories")
 }
//  const chickGender = toggleGender === true ? BoyChick : GirlChick;
//  console.log(chickGender);
 
  return (
    <div className={styles.pageContainer}>
       <header className={styles.header}>

        {/* girl or boy passed as prop from AddChick */}
        <img src={gender ? BoyChick : GirlChick} alt="Penguin-placeholder-img"/> 

      </header>

       {/* name of Chick as prop from AddChick */}
       <h2>How old is {currentName}?</h2>

      <div className={styles.ageClicker}>
        <button className={styles.minusButton} onClick={decreaseAge}>-</button>
        <span className={styles.ageNumber}>{chickAge}</span>
        <button className={styles.plusButton} onClick={increaseAge}>+</button>
      </div>

      {/* <Link to="./AddChickEnd"> */}
      <button onClick={handleNextPageSplash}type="submit" className={styles.secondaryBtn}>Next</button>
      {/* </Link> */}
      {/* <AddChickAge
      
      />  */}
      <BottomNavBar />
    </div>
  );
};

// chekcing - and +

export default AddChickAge;

