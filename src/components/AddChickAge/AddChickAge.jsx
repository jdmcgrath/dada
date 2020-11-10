import React, { useState, useEffect} from "react";
import styles from "./AddChickAge.module.scss";
import GirlChick from "../../assets/img/AddChick/GirlChick.svg";



const AddChickAge = (props) => {
  const [currentName, setCurrentName] = useState("");
  const {chickName} = props;
  // const [gender, setGender] = useState(false);
  useEffect(() => {
    setCurrentName(chickName);
}, [chickName])
// useEffect(()=> {
//   setGender(props.toggleGender)
// })

  const [ chickAge, setChickAge ] = useState(0);

  const increaseAge = () => {
    setChickAge(chickAge => chickAge + 1);
  }

  const decreaseAge = () => {
    if(chickAge>0){
      setChickAge(chickAge => chickAge - 1);
    } 
  }

  return (
    <div className={styles.pageContainer}>
       <header className={styles.header}>

        {/* girl or boy passed as prop from AddChick */}
        <img src={GirlChick} alt="Penguin-placeholder-img"/> 

      </header>

       {/* name of Chick as prop from AddChick */}
       <h2>How old is {currentName}?</h2>

      <div className={styles.ageClicker}>
        <button className={styles.minusButton} onClick={decreaseAge}>-</button>
        <span className={styles.ageNumber}>{chickAge}</span>
        <button className={styles.plusButton} onClick={increaseAge}>+</button>
      </div>

      {/* <Link to="./AddChickEnd"> */}
      <button type="submit" className={styles.primaryBtn}>Next</button>
      {/* </Link> */}
      {/* <AddChickAge
      
      />  */}
    </div>
  );
};

// chekcing - and +

export default AddChickAge;

