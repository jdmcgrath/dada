import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => { 
    return ( 
        <div>
            <nav>
                <button>Back</button>
                <h3>Current Page Name</h3>
                <button>Search</button>
                <FontAwesomeIcon icon={ellipsis}/>


            </nav>
        </div>
    )
}

export default NavBar;