import React from 'react';
import Routes from "./containers/Routes/Routes";
import NavBar from "./components/NavBar";


export const App = () => {

  // const [previousPage, setPreviousPage] = useState([])

  // const grabPreviousPage = () => {
  //   const arrPreviousPage = []
    

  //   arrPreviousPage.push({previousPage})
  // }
  //console.log(window.location.pathname);

  return (
    <>
        <NavBar /*pass setPreviuosPage through here*//>   
        <Routes />
    </> 
  )
}
export default App;