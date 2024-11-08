import { useContext } from "react";
import { UserContext } from "../App";


function Header() {
    const  userName  = useContext(UserContext);
    return ( 
        <div>
            <h1>Welcome, {userName}!</h1>
        </div>
     );
}

export default Header;