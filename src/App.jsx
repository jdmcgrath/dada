import React, { useState } from 'react';
import Routes from "./containers/Routes/Routes";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export const App = () => {

  const [ openSideBar, setOpenSideBar ] = useState(false);

  return (
    <>
        <NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <Routes />
    </> 
  )
}
export default App;