import { useContext } from "react";
import { ThemeContext1 } from "../App";
import classes from "./Profile.module.css"




function Profile() {
    const theme = useContext(ThemeContext1)
    return (
        <div className={theme === 'light' ? `${classes.light}` : `${classes.dark}`}>

            <h2>Profile</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero vel velit fringilla
                 semper. Integer non dolor nec orci tincidunt pellentesque. Donec euismod, orci ac posuere 
                 feugiat, velit velit ornare ex, vel consectetur neque velit vel velit. Nullam sed elementum
                  arcu. Donec efficitur, justo a dignissim consectetur, metus ipsum gravida mi, ac fringilla 
                  ipsum neque non justo. Nulla facilisi. Donec euismod, orci ac posuere feugiat, velit velit 
                  ornare ex, vel consectetur neque velit vel velit. Nullam sed elementum arcu. Donec efficitur, 
                  justo a dignissim consectetur, metus ipsum gravida mi, ac fringilla ipsum neque non justo.
                   Nulla facilisi. Donec euismod, orci ac posuere feugiat, velit velit ornare ex, vel consectetur
                    neque velit vel velit. Nullam sed elementum arcu
            
            </p>
        </div>);
}

export default Profile;