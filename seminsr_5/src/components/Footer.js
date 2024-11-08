import { useContext, useState } from "react";
import { ThemeContext1 } from "../App";
import classes from "./Profile.module.css"

function Footer() {
    const theme1 = useContext(ThemeContext1);
    const [now, setNow] = useState(new Date())
    setInterval(() => {
        setNow(new Date());
    }, 1000);
    return (
        <section className={theme1 === 'light' ? `${classes.light}` : `${classes.dark}`}>
            <h2>Footer</h2>
            <p>Time:{now.toLocaleTimeString()}</p>
        </section>
    );
}

export default Footer;