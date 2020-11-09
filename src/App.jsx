import React from 'react';
import Routes from "./containers/Routes/Routes";
import NavBar from "./components/NavBar";
import { firestore } from "../../firebase";

export const App = () => {

  const [docs, setDocs] = useState([]);
    const getBookSmarts = () => {
        firestore.collection("booksmarts").get().then((response) => {
        const documents = response.docs.map(d => d.data());
        setDocs(documents)
        })
    
    useEffect (() => {
        getBookSmarts();
    }, [])

  return (
    <>
        <NavBar />
        <Routes docs={docs} />
    </> 
  )
}
export default App;